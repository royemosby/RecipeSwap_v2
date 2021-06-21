class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :about, :profile_image
end
