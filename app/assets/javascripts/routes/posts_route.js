EmberBlog.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },

  renderTemplate: function() {
    this.render({ outlet: 'blog-posts' });
  },
});
