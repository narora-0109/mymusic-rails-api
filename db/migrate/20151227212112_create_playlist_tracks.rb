class CreatePlaylistTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_tracks do |t|
      t.references :playlist, index: true, foreign_key: true
      t.references :track, index: true, foreign_key: true
    end
  end
end
