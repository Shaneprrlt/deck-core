import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      notifications: this.get('store').findAll('notification')
    });
  }

});
