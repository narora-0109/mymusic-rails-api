class Api::V1::AlbumsController < Api::V1::ApplicationController

  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)
end
