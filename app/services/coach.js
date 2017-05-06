import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import ENV from 'deck/config/environment';

export default Ember.Service.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  coach: Ember.inject.service(),
  coachStorage: storageFor('coach'),

  subdomain: Ember.computed('coachStorage.subdomain', function() {
    if(this.get('coachStorage.subdomain')) {
      return this.get('coachStorage.subdomain');
    } else {
      return 'www';
    }
  }),

  apiHost: Ember.computed(function() {
    let namespace = 'www';
    return ENV['API_URL_PREFIX']
      + this.get('coach.subdomain')
      + ENV['API_URL_SUFFIX'];
  }),

  setSubdomain(subdomain) {
    this.get('coachStorage').set('subdomain', subdomain);
  },

  unsetSubdomain() {
    this.get('coachStorage').clear();
  },

});
