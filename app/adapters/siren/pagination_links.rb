include Rails.application.routes.url_helpers
class Siren::PaginationLinks
  FIRST_PAGE = 1

  attr_reader :collection, :serializer_options, :controller, :env

  def initialize(collection, serializer_options)
    @collection = collection
    @serializer_options = serializer_options
    @controller = serializer_options[:controller]
    @env = @controller.request.env
  end

  def serializable_hash(options = {})
    links_arr = []
    # raise
    pages_from.each do |key, value|
      controller_instance = @controller
      controller_name = @env['action_dispatch.request.path_parameters'][:controller]
      page_url = url_for(controller: controller_name, action: :index, page: value, per: controller_instance.get_per)
      page_url += ('?' + query_parameters.to_query) if !query_parameters.empty?
      links_arr << Hash[:rel, key, :href, page_url]
    end
    links_arr
  end

  private

  def pages_from
    # raise
    return {} if collection.total_pages == FIRST_PAGE

    {}.tap do |pages|
      pages[:self] = collection.current_page

      unless collection.current_page == FIRST_PAGE
        pages[:first] = FIRST_PAGE
        pages[:prev]  = collection.current_page - FIRST_PAGE
      end

      unless collection.current_page == collection.total_pages
        pages[:next] = collection.current_page + FIRST_PAGE
        pages[:last] = collection.total_pages
      end
    end
  end

  def url(options)
    @url ||= options.fetch(:links, {}).fetch(:self, nil) || original_url
  end

  def original_url
    @original_url ||= serializer_options.original_url[/\A[^?]+/]
  end

  def base_url
    @base_url ||= serializer_options.base_url
  end

  def query_parameters
    @query_parameters ||= @env['action_dispatch.request.query_parameters']
  end
end
