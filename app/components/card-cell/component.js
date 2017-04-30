import Ember from 'ember';

export default Ember.Component.extend({

  card: null,

  isBug: Ember.computed('card.cardType.name', function() {
    return this.get('card.cardType.name').toLowerCase() === 'bug';
  }),

  isFeature: Ember.computed('card.cardType.name', function() {
    return this.get('card.cardType.name').toLowerCase() === 'feature request';
  })

});
