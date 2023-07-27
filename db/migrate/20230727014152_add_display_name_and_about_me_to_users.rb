class AddDisplayNameAndAboutMeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :display_name, :string
    add_column :users, :about_me, :string
  end
end
