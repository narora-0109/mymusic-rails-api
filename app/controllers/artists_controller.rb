class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :update, :destroy]


  # GET /artists
  def index
    @artists = Artist.all

    #render json: @artists
     #render json: ArtistSerializer.new(@artists)


      respond_with(@artists) do |format|
        format.siren { render  json: @artists}
        format.json { render  json: @artists }
     end
  end

  # GET /artists/1
  def show
    #render json: @artist
    #render json:
    #respond_with  json: @artist
    #render siren:  ArtistSerializer.new(@artist)


     respond_with(@artist) do |format|
      format.siren { render  json: @artist}
      #format.siren { render  json: ActiveModel::SerializableResource.new(@artist) }

     end
  end

  # POST /artists
  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render json: @artist, status: :created, location: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artists/1
  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artists/1
  def destroy
    @artist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist
      @artist = Artist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artist_params
      params.require(:artist).permit(:title, :country)
    end
end
