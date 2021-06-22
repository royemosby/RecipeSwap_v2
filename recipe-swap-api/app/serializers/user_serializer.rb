class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :about, :profile_image
  has_many :recipes
  # Yeehaw! Step through is not needed!!
  # has_many :collector_favorites, foreign_key: "collector_id"
  has_many :favorites, class_name: "Recipe", through: :collector_favorites
end
