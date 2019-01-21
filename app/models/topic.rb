class Topic < ApplicationRecord
  mount_uploader :image, ImagesUploader
end
