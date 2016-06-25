class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :year
      t.references :artist, index: true, foreign_key: true

      t.timestamps
    end
  end
end
