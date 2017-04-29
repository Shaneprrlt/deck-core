import Ember from 'ember';
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({

  currentUser: Ember.computed('isAuthenticated', function() {
    
  }),

});
