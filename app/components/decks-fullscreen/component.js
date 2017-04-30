import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  casino: Ember.inject.service(),

  cards: null,
  apps: null,
  decks: null,

  fullscreen: Ember.computed('casino.fullscreen', function() {
    return this.get('casino.fullscreen');
  }),

  actions: {
    toggleFullscreen() {
      this.get('casino').toggleFullscreen();
    }
  }

});
