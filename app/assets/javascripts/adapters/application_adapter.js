// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
// EmberBlog.ApplicationAdapter = DS.ActiveModelAdapter.extend({

// });

// EmberBlog.ApplicationAdapter = DS.RESTAdapter.extend({});

// EmberBlog.ApplicationAdapter = DS.FixtureAdapter.extend({});


EmberBlog.ApplicationStore = DS.Store.extend({
 // Override the default adapter with the `DS.ActiveModelAdapter` which
 // is built to work nicely with the ActiveModel::Serializers gem.
 adapter: '-active-model',
});
