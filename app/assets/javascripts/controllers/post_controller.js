EmberBlog.PostController = Ember.ObjectController.extend({
  actions: {
    editTitle: function() {
      this.set('titleEditMode', true);
    },

    saveTitle: function() {
      this.set('titleEditMode', false);
      this.get('model').save();
    },

    editContent: function() {
      this.set('contentEditMode', true);
    },

    saveContent: function() {
      this.set('contentEditMode', false);
      this.get('model').save();
    },

    removePost: function() {
      var post = this.get('model');

      post.deleteRecord();
      post.save();

      this.transitionTo('posts');
    },
  },
});
