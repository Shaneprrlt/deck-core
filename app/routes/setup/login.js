import Ember from 'ember';

export default Ember.Route.extend({

  coach: Ember.inject.service(),
  store: Ember.inject.service(),

  beforeModel() {
    if(this.get('coach.subdomain') === 'www') {
      this.transitionTo('setup.index');
    }
  },

  model() {
    let subdomain = this.get('coach.subdomain');
    return Ember.RSVP.hash({
      team: this.get('store').queryRecord('team', { subdomain: subdomain })
    });
  }

});
