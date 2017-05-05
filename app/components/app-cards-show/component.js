import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),

  card: null,

  requester: Ember.computed('card.user', function() {
    return this.get('card.user');
  }),

  app: Ember.computed('card.app', function() {
    return this.get('card.app');
  }),

  developers: Ember.computed('app.developers.@each', function() {
    return this.get('app.developers');
  }),

  labels: Ember.computed('card.labels', function() {
    return this.get('card.labels');
  })

});
