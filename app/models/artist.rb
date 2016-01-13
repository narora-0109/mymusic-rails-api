class Artist < ApplicationRecord

  KAMINARI_RECORDS_PER_PAGE = 10

  has_many :albums
  belongs_to :genre

    def to_siren
      send(:to_json)
    end
end
