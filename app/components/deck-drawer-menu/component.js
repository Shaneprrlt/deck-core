import Ember from 'ember';

export default Ember.Component.extend({

  casino: Ember.inject.service(),

  apps: null,
  decks: null,
  
  filteredApps: Ember.computed.filter('apps', function(app) {
    return app.get('isNew') === false;
  }),

  actions: {
    setSelectedApp(app) {
      this.get('casino').setSelectedApp(app);
    },

    setSelectedDeck(deck) {
      this.get('casino').setSelectedDeck(deck);
    }
  }

});
