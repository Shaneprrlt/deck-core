import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  sound: Ember.inject.service(),

  team: null,
  email: null,
  password: null,
  error: null,

  didInsertElement() {
    this._super(...arguments);

    let _this = this;

    // debugger;

    // Ember.$().find("input[type=text]").on('keypress', function(event) {
    //   if (event.keyCode === 13) {
    //     _this.send('login');
    //   }
    // });
    //
    // Ember.$().find("input[type=password]").on('keypress', function(event) {
    //   if (event.keyCode === 13) {
    //     _this.send('login');
    //   }
    // });
  },

  actions: {
    login() {
      this.set('error', null);

      let _this = this,
        email = this.get('email'),
        password = this.get('password');

      this.get('session').authenticate('authenticator:oauth2', email, password).then(function() {
        // play login sound
        _this.get('sound').playLogin();
      }).catch(function(reason) {
        _this.set('error', 'Invalid login.');
      });
    }
  }

});
