import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  casino: Ember.inject.service(),
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  deck: Ember.computed(function() {
    return this.get('store').createRecord('deck');
  }),

  willDestroy() {
    let deck = this.get('deck');
    if(deck.get('isNew')) {
      deck.unloadRecord();
    }
  },

  actions: {
    back() {
      window.history.back();
    },

    createDeck() {
      let _this = this,
        deck = this.get('deck');

      deck.save()
        .then(function(deck) {
            _this.get('casino').setSelectedDeck(deck);
            _this.get('casino').set('casino.fullscreen', false);
            _this.get('casino').set('casino.menuOpen', false);
            _this.get('routing').transitionTo('app.index');
          })
        .catch(function(error) {
            debugger;
          });
    }
  }

});
