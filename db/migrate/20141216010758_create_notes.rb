class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title
      t.string :body
      t.string :priority_level

      t.timestamps
    end
  end
end
