class PostsController < ApplicationController
  def index
    render json: { posts: Post.all}
  end

  def show
    render json: { post: Post.find(params[:id]) }
  end

  def create
    title = params[:post][:title]
    content = params[:post][:content]
    post = Post.create(title: title, content: content)

    render json: { post: post }
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    render json: post
  end
end
