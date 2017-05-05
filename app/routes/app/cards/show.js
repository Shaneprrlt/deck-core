import Ember from 'ember';

export default Ember.Route.extend({

  casino: Ember.inject.service(),
  store: Ember.inject.service(),
  adapterContext: Ember.inject.service(),

  beforeModel() {
    this.get('casino').set('casino.fullscreen', false);
  },

  model(params) {
    return Ember.RSVP.hash({
      card: this.get('store').findRecord('card', params.card_id)
    });
  },

  afterModel(model, transition) {
    this.get('adapterContext').setContext({
      card: model.card
    });
  }

});
