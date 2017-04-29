import Ember from 'ember';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'deck/config/environment';

export default OAuth2PasswordGrantAuthenticator.extend({

  coach: Ember.inject.service(),

  serverTokenEndpoint: Ember.computed(function() {
    return ENV['API_URL_PREFIX']
      + this.get('coach.subdomain')
      + ENV['API_URL_SUFFIX']
      + '/users/login';
  })

});
