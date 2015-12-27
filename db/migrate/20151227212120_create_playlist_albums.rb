class CreatePlaylistAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_albums do |t|
      t.references :playlist, index: true, foreign_key: true
      t.references :album, index: true, foreign_key: true
    end
  end
end
