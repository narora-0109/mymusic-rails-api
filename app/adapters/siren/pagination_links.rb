include Rails.application.routes.url_helpers
class Siren::PaginationLinks
  FIRST_PAGE = 1

  attr_reader :collection, :context

  def initialize(collection, context)
    @collection = collection
    @context = context
  end

  def serializable_hash(options = {})
    pages_from.each_with_object({}) do |(key, value), hash|
       params=query_parameters.to_query
       controller_instance = context.env['action_controller.instance']
       #raise
       #controller_name = context.params['controller'].gsub('api/v1/','')
       #page_url=instance_eval("controller_instance.paged_v1_#{controller_name}_url(page: #{value},per:  #{controller_instance.get_per})")
       controller_name = context.params['controller']
       page_url= url_for(domain: controller_instance.request.domain, subdomain: :api, controller: controller_name, action: :index ,  page: controller_instance.get_page ,per: controller_instance.get_per )
       page_url += ("?" + query_parameters.to_query) if !query_parameters.empty?
       hash[key] = page_url
    end
  end

  private

  def pages_from
    #raise
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
    @original_url ||= context.original_url[/\A[^?]+/]
  end

  def base_url
    @base_url ||= context.base_url
  end

  def query_parameters
    @query_parameters ||= context.query_parameters
  end
end
