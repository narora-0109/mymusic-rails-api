class Api::V1::SearchController < Api::V1::ApplicationController

  PERMITTED_PARAMETERS = [:q ].freeze

  # has_scope :by_ids, type: :array
  # has_scope :artist
  # has_scope :album
  def search
    if params[:q].nil?
      @artists = []
    else
      @artists = Artist.search params[:q]
    end
  end



end

