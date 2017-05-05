import Ember from 'ember';

export default Ember.Route.extend({

  casino: Ember.inject.service(),
  store: Ember.inject.service(),

  beforeModel() {
    this.get('casino').set('casino.fullscreen', false);
  },

  model() {
    return Ember.RSVP.hash({
      cardTypes: this.get('store').findAll('card-type'),
      apps: this.get('store').findAll('app')
    });
  }

});
