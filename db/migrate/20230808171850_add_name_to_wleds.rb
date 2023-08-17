class AddNameToWleds < ActiveRecord::Migration[7.0]
  def change
    add_column :wleds, :name, :string
  end
end
