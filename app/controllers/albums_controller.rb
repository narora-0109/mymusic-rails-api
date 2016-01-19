class AlbumsController < ApplicationController
  #before_action :authenticate
  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)
end
