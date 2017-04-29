import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service(),

  team: null,
  notifications: null,

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }

});
