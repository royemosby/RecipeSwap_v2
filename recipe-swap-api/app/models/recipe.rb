class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :original, class_name: "Recipe", optional: true
  has_many :spinoffs, class_name: "Recipe", foreign_key: "original_id"
  has_many :collector_favorites, foreign_key: "favorite_id"
  has_many :collectors, class_name: "User", through: :collector_favorites
end
