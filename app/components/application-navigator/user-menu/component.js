import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['card'],

  routing: Ember.inject.service('-routing'),
  casino: Ember.inject.service(),
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  team: null,

  user: Ember.computed('session.currentUser', function() {
    return this.get('session.currentUser');
  }),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }

});
