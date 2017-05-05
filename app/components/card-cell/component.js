import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),

  card: null,
  openCard: null,

  actions: {
    openCard() {
      let card = this.get('card');
      if(this.get('openCard')) {
        this.get('openCard')(card);
      } else {
        this.get('routing').transitionTo('app.cards.show', [
          card.get('id')
        ]);
      }
    }
  }

});
