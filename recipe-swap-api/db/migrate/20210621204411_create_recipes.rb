class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes, id: :uuid do |t|
      t.string :name
      t.text :description
      t.text :ingredients
      t.text :instructions
      t.integer :servings
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :original, null: true, foreign_key: {to_table: :recipes}, type: :uuid
      
      t.timestamps
    end
  end
end
