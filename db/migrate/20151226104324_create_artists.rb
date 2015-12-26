class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :title
      t.string :country

      t.timestamps
    end
  end
end
