class PostsController < ApplicationController
  before_action :set_post, only: [:show, :destroy, :update]
  before_action :set_attributes, only: [:create, :update]

  def index
    @posts = Post.all

    render json: @posts
  end

  def show
    render json: @post
  end

  def create
    @post = Post.create(title: @title, content: @content)

    render json: @post
  end

  def update
    @post = @post.update_attributes(title: @title, content: @content)

    render json: @post
  end

  def destroy
    @post.destroy

    render json: @post
  end

  protected

  def set_post
    @post = Post.find(params[:id])
  end

  def set_attributes
    @title = params[:post][:title]
    @content = params[:post][:content]
  end
end
