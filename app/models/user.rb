class User < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  has_many :playlists

  has_secure_password
end
