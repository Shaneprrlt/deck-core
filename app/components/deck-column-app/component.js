import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['singleColumn'],

  casino: Ember.inject.service(),
  store: Ember.inject.service(),

  app: null,
  cards: null,

  sortProperties: ['createdAt:desc'],
  sortedCards: Ember.computed.sort('cards', 'sortProperties'),
  filteredCards: Ember.computed.filter('sortedCards', function(card) {
    return card.get('isNew') === false;
  }),

  setCards: Ember.observer('app', function() {
    let _this = this,
      app = this.get('app');
    if(app.get('id')) {
      app.findCards().then(function(_cards) {
        if(!_this.get('isDestroyed') && !_this.get('isDestroying')) {
          _this.get('store').pushPayload(_cards);
          let cards = _this.get('store').peekAll('card').filterBy('app.id', app.get('id'));
          _this.set('cards', cards);
        }
      });
    }
  }).on('didInsertElement'),

  actions: {
    openCard(card) {
      let app = this.get('app');
      this.get('casino').openCardFromAppDeck(card, app);
    }
  }

});
