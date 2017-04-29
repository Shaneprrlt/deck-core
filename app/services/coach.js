import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  coachStorage: storageFor('coach'),

  subdomain: Ember.computed('coachStorage.subdomain', function() {
    if(this.get('coachStorage.subdomain')) {
      return this.get('coachStorage.subdomain');
    } else {
      return 'www';
    }
  }),

  setSubdomain(subdomain) {
    this.get('coachStorage').set('subdomain', subdomain);
  },

  unsetSubdomain() {
    this.get('coachStorage').clear();
  }

});
