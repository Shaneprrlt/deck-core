import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  fullscreen: true,
  cards: null,
  apps: null,
  decks: null,

  actions: {
    
  }

});
