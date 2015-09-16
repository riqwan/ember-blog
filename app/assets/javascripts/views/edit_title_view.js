EmberBlog.EditTitleView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  },
});

Ember.Handlebars.helper('edit-title', EmberBlog.EditTitleView);
