class AddProfilePictureToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :image_path, :string
  end
end
