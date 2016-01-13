class AlbumsController < ApplicationController
  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)
end
