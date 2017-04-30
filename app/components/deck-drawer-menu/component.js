import Ember from 'ember';

export default Ember.Component.extend({

  casino: Ember.inject.service(),

  apps: null,
  decks: null,

  actions: {
    setSelectedApp(app) {
      this.get('casino').clearSelected();
      this.set('casino.selectedApp', app);
      this.get('casino').toggleMenu();
    },

    setSelectedDeck(deck) {
      this.get('casino').clearSelected();
      this.set('casino.selectedDeck', deck);
      this.get('casino').toggleMenu();
    }
  }

});
