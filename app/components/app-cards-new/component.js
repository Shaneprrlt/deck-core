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

    createCard() {
      debugger;
    }
  }

});
