import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  team: null,
  email: null,
  password: null,
  error: null,

  actions: {
    login() {
      this.set('error', null);

      let _this = this,
        email = this.get('email'),
        password = this.get('password');
        
      this.get('session').authenticate('authenticator:oauth2', email, password).catch(function(reason) {
        _this.set('error', 'Invalid login.');
      })
    }
  }

});
