import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['singleColumn'],

  deck: null,

  cards: Ember.computed('deck.cards.@each', function() {
    return this.get('deck.cards');
  }),

  sortedProperties: ['createdAt:desc'],
  sortedCards: Ember.computed.sort('cards', 'sortedProperties'),

});
