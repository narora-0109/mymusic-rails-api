class ArtistsController < ApplicationController
  PERMITTED_PARAMETERS= %W(title country).map(&:to_sym)
end
