import Ember from 'ember';

export default Ember.Component.extend({

  menuOpen: null,
  apps: null,
  decks: null,
  selectedApp: null,
  selectedDeck: null,
  clearSelected: null,

  actions: {
    setSelectedApp(app) {
      this.get('clearSelected')();
      this.set('selectedApp', app);
      this.set('menuOpen', false);
    },

    setSelectedDeck(deck) {
      this.get('clearSelected')();
      this.set('selectedDeck', deck);
      this.set('menuOpen', false);
    }
  }

});
