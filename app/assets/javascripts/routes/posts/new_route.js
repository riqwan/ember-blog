EmberBlog.PostsNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'blog-post' });
  },
});
