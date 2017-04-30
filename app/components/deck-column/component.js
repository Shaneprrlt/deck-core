import Ember from 'ember';

export default Ember.Component.extend({

  deck: null,

  cards: Ember.computed('deck.cards.@each', function() {
    return this.get('deck.cards');
  }),

  sortedProperties: ['createdAt:desc'],
  sortedCards: Ember.computed.sort('cards', 'sortedProperties'),

});
