import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  fullscreen: null,
  menuOpen: null,
  cards: null,
  apps: null,
  decks: null,

  selectedApp: null,
  selectedDeck: null,

  setDefaultDeck: Ember.observer('apps.@each', 'decks.@each', function() {
    let apps = this.get('apps'),
      decks = this.get('decks');

    if(decks.get('length') > 0 && !this.get('selectedDeck') && !this.get('selectedApp')) {
      this.set('selectedDeck', decks.objectAt(0));
    } else if(apps.get('length') > 0) {
      this.set('selectedApp', apps.objectAt(0));
    } else {
      this.set('menuOpen', true);
    }
  }).on('didInsertElement'),

  actions: {
    toggleMenu() {
      this.set('menuOpen', !this.get('menuOpen'));
    },

    toggleFullscreen() {
      this.set('fullscreen', !this.get('fullscreen'));
    },

    clearSelected() {
      this.set('selectedApp', null)
      this.set('selectedDeck', null);
    }
  }

});
