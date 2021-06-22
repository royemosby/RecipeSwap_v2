class CreateCollectorFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :collector_favorites, id: :uuid do |t|
      t.references :collector, null: false, foreign_key: {to_table: 'users'}, type: :uuid
      t.references :favorite, null: false, foreign_key: {to_table: 'recipes'}, type: :uuid

      t.timestamps
    end
  end
end
