class Track < ApplicationRecord
  belongs_to :album
  has_many :playlists
  has_many :users, through: :playlists

end
