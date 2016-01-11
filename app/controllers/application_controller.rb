require "application_responder"

class ApplicationController < ActionController::API

  KAMINARI_RECORDS_PER_PAGE = 4

  self.responder = ApplicationResponder
  respond_to :siren, :json, :html

  attr_accessor :kaminari

  def model_class
    "#{controller_name.classify}".constantize
  end

  def get_per
    begin
      model_per = model_class::KAMINARI_RECORDS_PER_PAGE
    rescue NameError
      model_per=false
    end
    model_per  || self.class::KAMINARI_RECORDS_PER_PAGE || Kaminari.config.default_per_page
  end

  def get_page
    params[:page] ||  1
  end


  def fields_for_actions
    get_fields_for_actions = {}
    raw_fields_hash = model_class.columns_hash

    #permitted_params = instance_eval("#{model_class.model_name.singular}_params")

    raw_fields_hash.keys.each do |attribute_name|

      if self.class::PERMITTED_PARAMETERS.member?(attribute_name.to_sym)

        get_fields_for_actions[attribute_name]= Hash.new
        get_fields_for_actions[attribute_name][:name] = attribute_name
        get_fields_for_actions[attribute_name][:type] = raw_fields_hash[attribute_name].type

      end
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
