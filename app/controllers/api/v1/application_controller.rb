# DRY approach, child controllers define only permitted attributes with a constant.
require 'application_responder'
class Api::V1::ApplicationController < ActionController::API
  include Pundit
  before_action :authenticate_request
  before_action :set_resource, only: [:destroy, :show, :update]

  attr_reader :current_user
  respond_to :siren, :json, :html
  self.responder = ApplicationResponder

  # default ,can be overridden in child controllers
  KAMINARI_RECORDS_PER_PAGE = 10

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from Pundit::NotAuthorizedError, with: :render_unauthorized

  protected

  # Authentication

  def authenticate_request
    # raise
    auth_header = request.headers['Authorization']
    if auth_header
      token = auth_header.split(' ').last
      begin
        jwt_token = JsonWebToken.new token: token
        @current_user = jwt_token.current_user
      rescue JWT::DecodeError
        render_unauthorized(errors: { unauthenticated: ['Invalid credentials'] })
      end
    else
      render_unauthorized(errors: { unauthenticated: ['Not Authenticated'] })
    end
  end

  def render_unauthorized(payload = {})
    render json: payload, status:  401
  end

  def not_found
    head :not_found
  end

  private

  # Returns the resource from the created instance variable
  # @return [Object]
  def resource
    authorize record = instance_variable_get("@#{resource_name}")
    record
  end

  # Returns the allowed parameters for searching
  # Override this method in each API controller
  # to permit additional parameters to search on
  # @return [Hash]
  # def query_params
  #   {}
  # end

  # Returns the allowed parameters for pagination
  # @return [Hash]
  def page_params
    params.permit(:page, :per, :format, :subdomain, :id)
  end

  # The resource class based on the controller
  # @return [Class]
  def resource_class
    @resource_class ||= resource_name.classify.constantize
    # {}"#{controller_name.classify}".constantize
  end

  # The singular name for the resource class based on the controller
  # @return [String]
  def resource_name
    @resource_name ||= controller_name.singularize
  end

  # Only allow a trusted parameter "white list" through.
  # By default, all parameters are permitted.To enable a white list,
  # define the PERMITTED_PARAMETERS constant array in each resource
  # controller.
  def permitted_resource_params
    params.require(resource_name.to_sym).permit(*self.class::PERMITTED_PARAMETERS) if self.class::PERMITTED_PARAMETERS
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_resource(resource = nil)
    resource ||= resource_class.find(params[:id])
    instance_variable_set("@#{resource_name}", resource)
  end

  public

  # entry point for API navigation.
  def root
    menu = []
    ['api/v1/artists', 'api/v1/albums', 'api/v1/genres', 'api/v1/playlists', 'api/v1/users'].each do |resource|
      menu << {
                title: resource.to_s.gsub('api/v1/', '').humanize,
                href: self.class.url_for(controller: resource, action: :index)
               }
    end
    respond_with(menu) do |format|
      format.json  { render json:  Siren.root(menu) }
      format.siren { render json: Siren.root(menu)  }
    end
  end

  # GET /{plural_resource_name}
  def index
    plural_resource_name = "@#{resource_name.pluralize}"
    ids = params[:id].split(',') if params[:id]
    if ids
      resources = policy_scope(apply_scopes(resource_class)).where(id: ids)
    else
      resources = policy_scope(apply_scopes(resource_class))
    end

    # authorize resources
    if stale?(resources, last_modified: resources.maximum(:updated_at))
      resources = Kaminari.paginate_array(resources).page(get_page).per(get_per)
      instance_variable_set(plural_resource_name, resources)
      resource_collection = instance_variable_get(plural_resource_name)
      respond_with(resource_collection) do |format|
        format.json  { render json:  resource_collection, related: 'links', controller: self, namespace: 'api/v1/' }
        format.siren { render json: resource_collection, related: 'links', controller: self, namespace: 'api/v1/' }
      end
    end
  end




  # GET /{plural_resource_name}
  # Search with ElasticSearch
  def search
    plural_resource_name = "@#{resource_name.pluralize}"
      # resources = policy_scope(apply_scopes(resource_class))
      resources = resource_class.search(params[:q],{country: params[:country],
                                                    genre: params[:genre],
                                                    per: params[:per],
                                                    page: params[:page],
                                                    }).records
    if stale?(resources, last_modified: resources.maximum(:updated_at))
      # resources = Kaminari.paginate_array(resources).page(get_page).per(get_per)
      instance_variable_set(plural_resource_name, resources)
      resource_collection = instance_variable_get(plural_resource_name)
      respond_with(resource_collection) do |format|
        format.json  { render json:  resource_collection, related: 'links', controller: self, namespace: 'api/v1/' }
        format.siren { render json: resource_collection, related: 'links', controller: self, namespace: 'api/v1/' }
      end
    end
  end

  # GET /{plural_resource_name}/1
  def show
    if stale?(resource)
      respond_with(resource) do |format|
        format.json  { render json:  resource, related: 'links', controller: self, namespace: 'api/v1/' }
        format.siren { render json:  resource, related: 'links', controller: self, namespace: 'api/v1/' }
      end
    end
  end

  # POST /{plural_resource_name}
  def create
    set_resource(resource_class.new(permitted_resource_params))
    if resource.save
      respond_with(resource) do |format|
        format.json  { render json:  resource, controller: self, namespace: 'api/v1/', status: :created, location: self.class.url_for(controller: self.class.to_s.underscore.gsub('_controller', ''), action: :show, id: resource.id) }
        format.siren { render json: resource, namespace: 'api/v1/', controller: self, status: :created, location:  self.class.url_for(controller: self.class.to_s.underscore.gsub('_controller', ''), action: :show, id: resource.id) }
      end
    else
      respond_with(resource) do |format|
        format.json  { render json:  resource.errors, status: :unprocessable_entity }
        format.siren { render json:  resource.errors, status: :unprocessable_entity }
      end
    end
  end



  # PATCH/PUT /api/{plural_resource_name}/{resource.id}
  def update
    if resource.update(permitted_resource_params)
      respond_with(resource) do |format|
        format.json  { render json:  resource, controller: self, namespace: 'api/v1/' }
        format.siren { render json: resource, controller: self, namespace: 'api/v1/' }
      end
    else
      respond_with(resource) do |format|
        format.json  { render json: resource.errors, status: :unprocessable_entity }
        format.siren { render json: resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/{plural_resource_name}/{resource.id}
  def destroy
    resource.destroy
    head :no_content
  end

  def get_per
    begin
      model_per = resource_class::KAMINARI_RECORDS_PER_PAGE
    rescue NameError
      model_per = false
    end
    default_per = model_per || self.class::KAMINARI_RECORDS_PER_PAGE || Kaminari.config.default_per_page
    page_params[:per] || default_per
  end

  def get_page
    page_params[:page] || 1
  end

  def fields_for_actions
    get_fields_for_actions = {}
    raw_fields_hash = resource_class.columns_hash

    permitted_fields = defined?(self.class::PERMITTED_PARAMETERS) ? self.class::PERMITTED_PARAMETERS : raw_fields_hash.keys

    permitted_fields.each do |attribute_name|
      # if self.class::PERMITTED_PARAMETERS.member?(attribute_name.to_sym)
      get_fields_for_actions[attribute_name] = {}
      get_fields_for_actions[attribute_name][:name] = attribute_name
      if raw_fields_hash[attribute_name.to_s].present?
        get_fields_for_actions[attribute_name][:type] = raw_fields_hash[attribute_name.to_s].type
      else
        get_fields_for_actions[attribute_name][:type] = :string
      end
      # end
    end
    get_fields_for_actions
  end

  def column_type_to_html_input
    {
      boolean:          :checkbox,
      string:           :text,
      email:            :email,
      url:              :url,
      tel:              :tel,
      password:         :password,
      search:           :search,
      uuid:             :text,
      text:             :textarea,
      file:             :file,
      hidden:           :hidden,
      integer:          :number,
      float:            :number,
      decimal:          :number,
      range:            :range,
      datetime:         :select,
      date:             :select,
      time:             :select,
      select:           :select,
      radio_buttons:    :radio_collection,
      check_boxes:      :checkbox_collection,
      country:          :select,
      time_zone:        :select
    }
  end
end
