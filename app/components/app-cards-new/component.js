import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  cardTypes: null,
  apps: null,

  card: Ember.computed(function() {
    return this.get('store').createRecord('card');
  }),

  sortProperties: ['id:asc'],
  sortedCardTypes: Ember.computed.sort('cardTypes', 'sortProperties'),

  willDestroy() {
    let card = this.get('card');
    if(card.get('isNew')) {
      card.unloadRecord();
    }
  },

  actions: {
    back() {
      window.history.back();
    },

    selectApp(appId) {
      let app = this.get('store').peekRecord('app', appId);
      this.set('card.app', app);
    },

    createCard() {
      let _this = this,
        card = this.get('card');

      card.save()
        .then(function(card) {
            _this.get('routing').transitionTo('app.cards.show', [
              card.get('id')
            ])
          })
        .catch(function(error) {
          debugger;
          });
    }
  }

});
