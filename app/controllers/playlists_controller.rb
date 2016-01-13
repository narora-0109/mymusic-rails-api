class PlaylistsController < ApplicationController
  PERMITTED_PARAMETERS= %W(title user_id track_id).map(&:to_sym)
end
