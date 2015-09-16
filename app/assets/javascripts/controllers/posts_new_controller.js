EmberBlog.PostsNewController = Ember.ObjectController.extend({
  actions: {
    createPost: function() {
      var title = $('#title').val();
      var content = $('#content').val();

      var post = this.store.createRecord('post', {
        title: title,
        content: content,
      });

      var _this = this;

      function transitionToPost(post) {
        _this.transitionTo('post', post);
      }

      post = post.save().then(transitionToPost);
    },
  },
});
