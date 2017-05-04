import Ember from 'ember';

export default Ember.Controller.extend({

  team: Ember.computed('model.team', function() {
    return this.get('model.team');
  }),

  labels: Ember.computed('model.labels', function() {
    return this.get('model.labels');
  }),

  cards: Ember.computed('model.cards', function() {
    return this.get('model.cards');
  }),

  apps: Ember.computed('model.apps', function() {
    return this.get('model.apps');
  }),

  decks: Ember.computed('model.decks', function() {
    return this.get('model.decks');
  }),

  notifications: Ember.computed('model.notifications', function() {
    return this.get('model.notifications');
  })

});
