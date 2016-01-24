class Api::V1::TracksController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title time album_id).map(&:to_sym)
end
