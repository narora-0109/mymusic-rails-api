class Genre < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  has_many :artists
end
