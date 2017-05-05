import Ember from 'ember';

export default Ember.Component.extend({

  casino: Ember.inject.service(),

  apps: null,
  decks: null,

  actions: {
    setSelectedApp(app) {
      this.get('casino').setSelectedApp(app);
    },

    setSelectedDeck(deck) {
      this.get('casino').setSelectedDeck(deck);
    }
  }

});
