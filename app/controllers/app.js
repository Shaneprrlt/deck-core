import Ember from 'ember';

export default Ember.Controller.extend({

  team: Ember.computed('model.team', function() {
    return this.get('model.team');
  }),

  labels: Ember.computed('model.labels.@each', function() {
    return this.get('model.labels');
  }),

  cards: Ember.computed('model.cards.@each', function() {
    return this.get('model.cards');
  }),

  apps: Ember.computed('model.apps.@each', function() {
    return this.get('model.apps');
  }),

  decks: Ember.computed('model.decks.@each', function() {
    return this.get('model.decks');
  }),

  notifications: Ember.computed('model.notifications.@each', function() {
    return this.get('model.notifications');
  })

});
