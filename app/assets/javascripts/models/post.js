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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna lacus, congue non vehicula at, tempus sed risus. Proin sit amet lectus sed metus suscipit venenatis et at lectus. Curabitur laoreet mauris eget nulla venenatis aliquet. Mauris maximus lacinia urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis erat quis velit dignissim sodales. Phasellus pellentesque diam a nisl tristique, ac blandit nibh maximus. In hac habitasse platea dictumst. Duis vitae elit facilisis, suscipit enim sit amet, condimentum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices pretium sapien at laoreet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer facilisis, ex vel maximus lobortis, dui lorem interdum lacus, at sollicitudin tortor elit quis turpis. Nunc dictum tincidunt tempor. Aliquam nisl est, posuere vitae porttitor at, ullamcorper vel metus. Cras vitae aliquet eros. Donec venenatis semper enim, vitae accumsan velit. Integer ac dui feugiat, tristique turpis sit amet, ornare erat.',
  },
  {
    id: 2,
    title: 'We must get rid of the Nazis',
    content: 'This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post. This is a test description that just shows up as a description for the blog post. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer facilisis, ex vel maximus lobortis, dui lorem interdum lacus, at sollicitudin tortor elit quis turpis. Nunc dictum tincidunt tempor. Aliquam nisl est, posuere vitae porttitor at, ullamcorper vel metus. Cras vitae aliquet eros. Donec venenatis semper enim, vitae accumsan velit. Integer ac dui feugiat, tristique turpis sit amet, ornare erat.',
  },
  {
    id: 3,
    title: 'Why do you Nazi this?!',
    content: 'Aliquam facilisis ante vitae ex malesuada auctor a vitae sapien. Nunc justo odio, commodo in tincidunt non, egestas quis mi. Phasellus in diam urna. In vehicula erat dolor, vitae pulvinar massa tristique in. Quisque at elit dapibus, hendrerit erat nec, iaculis odio. Pellentesque sit amet augue nec tellus rutrum venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec nulla sit amet nulla venenatis fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer facilisis, ex vel maximus lobortis, dui lorem interdum lacus, at sollicitudin tortor elit quis turpis. Nunc dictum tincidunt tempor. Aliquam nisl est, posuere vitae porttitor at, ullamcorper vel metus. Cras vitae aliquet eros. Donec venenatis semper enim, vitae accumsan velit. Integer ac dui feugiat, tristique turpis sit amet, ornare erat.',
  },
];
