EmberBlog.EditContentView = Ember.TextArea.extend({
  didInsertElement: function() {
    this.$().focus();
  },
});

Ember.Handlebars.helper('edit-content', EmberBlog.EditContentView);
