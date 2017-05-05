import Ember from 'ember';

export default Ember.Component.extend({

  casino: Ember.inject.service(),
  session: Ember.inject.service(),

  team: null,
  notifications: null,

  actions: {
    logout() {
      this.get('session').invalidate();
    },

    openCreateCard() {
      this.get('casino').set('casino.fullscreen', false);
      this.get('routing').transitionTo('app.cards.new');
    }
  }

});
