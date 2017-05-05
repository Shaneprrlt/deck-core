import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['singleColumn'],

  casino: Ember.inject.service(),
  
  deck: null,

  cards: Ember.computed('deck.cards.@each', function() {
    return this.get('deck.cards');
  }),

  sortedProperties: ['createdAt:desc'],
  sortedCards: Ember.computed.sort('cards', 'sortedProperties'),

  actions: {
    openCard(card) {
      let deck = this.get('deck');
      this.get('casino').openCardFromDeck(card, deck);
    }
  }

});
