class Api::V1::PlaylistsController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title user_id track_id).map(&:to_sym)
end
