import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['singleColumn'],

  store: Ember.inject.service(),

  app: null,
  cards: null,

  sortProperties: ['createdAt:desc'],
  sortedCards: Ember.computed.sort('cards', 'sortProperties'),

  setCards: Ember.observer('app', function() {
    let _this = this,
      app = this.get('app');
    if(app.get('id')) {
      app.findCards().then(function(_cards) {
        _this.get('store').pushPayload(_cards);
        let cards = _this.get('store').peekAll('card').filterBy('app.id', app.get('id'));
        _this.set('cards', cards);
      });
    }
  }).on('didInsertElement')

});
