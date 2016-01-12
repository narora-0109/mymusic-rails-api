class AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :update, :destroy]


  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)

  # GET /albums
  def index
    if params[:ids]
      @albums = Album.find(params[:ids].split(','))
      @albums = Kaminari.paginate_array(@albums).page(get_page).per(get_per)
    else
    @albums = Album.all.page(get_page).per(get_per)
  end
    render json: @albums, related: 'links'
  end

  # GET /albums/1
  def show

    respond_with(@album) do |format|
      format.json  { render json:  @album ,related: 'links' }
      format.siren { render json: @album ,related: 'links'}
    end
  end

  # POST /albums
  def create
    @album = Album.new(album_params)

    if @album.save
       respond_with(@album) do |format|
         format.json  { render json:  @album ,status: :created,location: @album.to_json}
         format.siren { render  json: @album ,status: :created, location: @album.to_json}
       end
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /albums/1
  def update
    if @album.update(album_params)
      respond_with(@album) do |format|
        format.json  { render json:  @album  }
        format.siren { render  json: @album }
      end
    else
      respond_with(@album) do |format|
        format.json  { render json: @album.errors, status: :unprocessable_entity  }
        format.siren { render json: @album.errors, status: :unprocessable_entity }
      end
      render
    end
  end

  # DELETE /albums/1
  def destroy
    @album.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = Album.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def album_params
      #params.require(:album).permit(:title, :year, :artist_id)
      params.require(:album).permit(*PERMITTED_PARAMETERS)
    end
end
