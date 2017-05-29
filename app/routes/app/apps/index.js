import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),

  beforeModel(transition) {
    if(!this.get('session.currentUser.isAdmin')) {
      this.transitionTo('app.index');
    }
  },

  model() {
    return Ember.RSVP.hash({
      apps: this.get('store').findAll('app')
    });
  }

});
