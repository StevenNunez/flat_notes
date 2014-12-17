class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :priority_level
end
