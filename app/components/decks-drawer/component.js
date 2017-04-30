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

  menuOpen: Ember.computed('casino.menuOpen', function() {
    return this.get('casino.menuOpen');
  }),

  selectedApp: Ember.computed('casino.selectedApp', function() {
    return this.get('casino.selectedApp');
  }),

  selectedDeck: Ember.computed('casino.selectedDeck', function() {
    return this.get('casino.selectedDeck');
  }),

  setDefaultDeck: Ember.observer('apps.@each', 'decks.@each', function() {
    let apps = this.get('apps'),
      decks = this.get('decks');

    if(decks.get('length') > 0 && !this.get('selectedDeck') && !this.get('selectedApp')) {
      this.set('casino.selectedDeck', decks.objectAt(0));
    } else if(apps.get('length') > 0) {
      this.set('casino.selectedApp', apps.objectAt(0));
    } else {
      this.get('casino').toggleMenu();
    }
  }).on('didInsertElement'),

  actions: {
    toggleMenu() {
      this.get('casino').toggleMenu();
    },

    toggleFullscreen() {
      this.get('casino').toggleFullscreen();
    }
  }

});
