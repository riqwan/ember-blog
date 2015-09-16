EmberBlog.PostController = Ember.ObjectController.extend({
  actions: {
    editTitle: function() {
      this.set('titleEditMode', true);
    },

    saveTitle: function() {
      this.set('titleEditMode', false)
      this.get('model').save();
    },
  },
});
