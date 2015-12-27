class PlaylistAlbum < ApplicationRecord
  belongs_to :playlist
  belongs_to :album
end