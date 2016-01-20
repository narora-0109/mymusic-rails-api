class User < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  has_secure_password

  has_many :playlists


end
