class TracksController < ApplicationController
  PERMITTED_PARAMETERS= %W(title time album_id).map(&:to_sym)
end
