class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :username, unique: true
      t.string :password_digest
      t.text :about
      t.string :profile_image

      t.timestamps
    end
  end
end
