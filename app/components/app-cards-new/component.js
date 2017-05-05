import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  session: Ember.inject.service(),

  cardTypes: null,
  apps: null,

  card: Ember.computed(function() {
    return this.get('store').createRecord('card');
  }),

  sortProperties: ['id:asc'],
  sortedCardTypes: Ember.computed.sort('cardTypes', 'sortProperties'),

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
          debugger;
          })
        .catch(function(error) {
          debugger;
          });
    }
  }

});
