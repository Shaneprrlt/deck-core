import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  authenticationRoute: 'setup.index',

  coach: Ember.inject.service(),
  store: Ember.inject.service(),

  model() {
    let subdomain = this.get('coach.subdomain');
    return Ember.RSVP.hash({
      team: this.get('store').queryRecord('team', { subdomain: subdomain }),
      labels: this.get('store').findAll('label'),
      cards: this.get('store').findAll('card'),
      apps: this.get('store').findAll('app'),
      decks: this.get('store').findAll('deck'),
      notifications: this.get('store').findAll('notification')
    });
  }

});
