import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  team: null,
  user: null,
  error: null,

  actions: {
    register() {
      this.set('error', null);
      
      let _this = this,
        user = this.get('user');

      user.save().then(function() {
        _this.get('session').authenticate('authenticator:oauth2', user.get('email'), user.get('password')).catch(function(resp) {});
      }, function(error) {
        debugger;
      });
    }
  }

});
