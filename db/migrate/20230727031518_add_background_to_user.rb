class AddBackgroundToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :background_path, :string
  end
end
