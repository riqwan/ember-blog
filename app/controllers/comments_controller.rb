class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_content, only: [:create, :update]

  def index
    @comments = @post.comments

    render json: @comments
  end

  def create
    @comment = Comment.create(content: @content)

    render json: @comment
  end

  def show
    render json: @comment
  end

  def update
    @comment.update_attributes(content: @content)

    render json: @comment
  end

  protected

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_content
    @content = params[:comment][:content]
  end
end
