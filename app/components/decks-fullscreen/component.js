import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  fullscreen: null,
  cards: null,
  apps: null,
  decks: null,

  actions: {
    toggleFullscreen() {
      this.set('fullscreen', !this.get('fullscreen'));
    }
  }

});
