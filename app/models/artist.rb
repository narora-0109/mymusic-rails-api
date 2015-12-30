class Artist < ApplicationRecord
  has_many :albums
  belongs_to :genre

    def to_siren
      send(:to_json)
    end
end
