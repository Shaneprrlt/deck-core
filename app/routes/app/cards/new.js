import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      cardTypes: this.get('store').findAll('card-type'),
      apps: this.get('store').findAll('app')
    });
  }

});
