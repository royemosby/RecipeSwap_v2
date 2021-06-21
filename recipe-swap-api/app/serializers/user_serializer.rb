class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :about, :profile_image
  has_many :recipes
end
