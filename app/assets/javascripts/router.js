EmberBlog.Router.map(function() {
  this.resource('posts', { path: '/' }, function() {
    this.resource('post', { path: '/:id' });
  });
});
