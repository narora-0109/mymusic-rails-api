class AlbumsController < ApplicationController
  before_action :authenticate_request
  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)
end
