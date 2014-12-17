class NotesController < ApplicationController
  def index
    render json: Note.all
  end

  def create
    safe_note = params.require(:note).permit(:title, :body)
    note = Note.create(safe_note)
    render json: note
  end
end
