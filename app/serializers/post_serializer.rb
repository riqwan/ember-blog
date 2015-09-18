class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content

  has_many :comments

  def comments
    object.comments.map do |comment|
      comment.id
    end
  end
end
