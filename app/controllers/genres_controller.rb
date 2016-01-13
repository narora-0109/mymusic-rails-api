class GenresController < ApplicationController
  PERMITTED_PARAMETERS= %W(title).map(&:to_sym)
end
