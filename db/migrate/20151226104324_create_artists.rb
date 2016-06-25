class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :title
      t.string :country
      t.references :genre, index: true, foreign_key: true

      t.timestamps
    end
  end
end
