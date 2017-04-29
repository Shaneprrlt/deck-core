import Ember from 'ember';

export default Ember.Component.extend({

  coach: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  subdomain: null,
  error: null,

  didInsertElement() {
    this._super(...arguments);

    let _this = this;
    this.$().find("input[type=text]").on('keypress', function(event) {
      if(event.keyCode === 13) {
        _this.send('proceedToLogin');
      }
    });
  },

  actions: {
    proceedToLogin() {
      this.get('coach').unsetSubdomain();
      if(this.get('subdomain')) {
        let _this = this,
          subdomain = this.get('subdomain');

        // find this team
        this.get('store').queryRecord('team', { subdomain: subdomain }).then(function(team) {
          _this.get('coach').setSubdomain(team.get('subdomain'));
          _this.get('routing').transitionTo('setup.login');
        }, function(error) {
          console.log(error);
          _this.set('error', 'We could not find that team.')
        });

      } else {
        this.set('error', 'Please enter your Deck Team\s URL');
      }
    }
  }

});
