class CreateWleds < ActiveRecord::Migration[7.0]
  def change
    create_table :wleds do |t|
      t.string :ip
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
