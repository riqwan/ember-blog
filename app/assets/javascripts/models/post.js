EmberBlog.Post = DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),

  description: function() {
    var content = this.get('content');

    return content.substring(0, 140);
  }.property('content'),
});

EmberBlog.Post.FIXTURES = [
  {
   id: 1,
   title: 'Habibi Nazis Ember.js',
   content: 'This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post.'
 },
 {
   id: 2,
   title: 'We must get rid of the Nazis',
   content: 'This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post.'
 },
 {
   id: 3,
   title: 'Why do you Nazi this?!',
   content: 'This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post.'
 }
]
