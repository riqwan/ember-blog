EmberBlog.Comment = DS.Model.extend({
  content: DS.attr('string'),
  post: DS.belongsTo('post', { async: true }),
});

// EmberBlog.Comment.FIXTURES = [
//   {
//     id: 1,
//     content: 'Habibi Nazis Ember.js',
//     post: '1',
//   },
//   {
//     id: 2,
//     content: 'We must get rid of the Nazis',
//     post: '1',
//   },
//   {
//     id: 3,
//     content: 'Why do you Nazi this?!',
//     post: '2',
//   },
//   {
//     id: 3,
//     content: 'Why do you Nazi this?!',
//     post: '2',
//   },
// ];
