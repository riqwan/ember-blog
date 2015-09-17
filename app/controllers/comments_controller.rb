class CommentsController < ApplicationController
  before_action :set_post, only: [:index]

  def index
    @comments = @post.comments

    render json: @comments
  end

  protected

  def set_post
    @post = Post.find(params[:post_id])
  end
end
