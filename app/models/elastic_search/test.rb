module ElasticSearch
  class Test
def self.test
 im= ElasticSearch::IndexManager
 client=im.es_client
     ms=ElasticSearch::MusicSearch.new({query: 'King'})
    # client.search index: 'myindex', body: { query: { match: { title: 'King' } }}
    #  client.search(JSON.parse(ms.__query))

    #  binding.pry
    response = client.search index: 'mymusic',
                             type: 'artist',
                             # explain: true,
                             body:JSON.parse(ms.__query)

    hresponse = Hashie::Mash.new response
    r=hresponse.hits.hits.map{|r| r._source.title}
    ap response
    pp r

    arresponse= Elasticsearch::Model::Response.Base.new(Artist,response)
    ap arresponse
    end

  end
end
