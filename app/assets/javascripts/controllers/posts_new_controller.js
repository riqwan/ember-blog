EmberBlog.PostsNewController = Ember.ObjectController.extend({
  actions: {
    createPost: function() {
      var title = $('#title').val();
      var content = $('#content').val();

      var post = this.store.createRecord('post', {
        title: title,
        content: content,
      });

      post.save();

      this.transitionTo('post', post.id);
    },
  },
});
