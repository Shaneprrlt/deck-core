import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isFeature', 'isSelected'],

  cardType: null,
  card: null,

  isFeature: Ember.computed('cardType.isFeature', function() {
    return this.get('cardType.isFeature');
  }),

  isSelected: Ember.computed('card.cardType', 'cardType', function() {
    return this.get('card.cardType.id') === this.get('cardType.id');
  }),

  click() {
    this.set('card.cardType', this.get('cardType'));
  }
});
