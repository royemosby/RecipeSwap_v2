class User < ApplicationRecord
  has_many :recipes
  has_many :collector_favorites, foreign_key: "collector_id"
  has_many :favorites, class_name: "Recipe", through: :collector_favorites

  validates :username, uniqueness: true
  
  has_secure_password
end
