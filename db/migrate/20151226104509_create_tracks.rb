class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :time
      t.string :integer
      t.references :album, index: true, foreign_key: true

      t.timestamps
    end
  end
end
