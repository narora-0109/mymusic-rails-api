class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :title
      t.references :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
