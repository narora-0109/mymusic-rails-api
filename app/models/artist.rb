class Artist < ApplicationRecord
  has_many :albums
  belongs_to :genre
end
