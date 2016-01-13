class PlaylistAlbum < ApplicationRecord

  KAMINARI_RECORDS_PER_PAGE = 10
  belongs_to :playlist
  belongs_to :album
end