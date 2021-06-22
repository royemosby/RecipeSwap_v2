class CollectorFavorite < ApplicationRecord
  belongs_to :collector, class_name: "User"
  belongs_to :favorite, class_name: "Recipe"
end
