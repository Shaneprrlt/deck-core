import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),

  notifications: null,

  unreadNotifications: Ember.computed('notifications.@each.read', function() {
    return this.get('notifications').filterBy('read', false);
  }),

  showIndicator: Ember.computed('unreadNotifications.@each', function() {
    return this.get('unreadNotifications.length') > 0;
  }),

  click() {
    this.get('routing').transitionTo('app.notifications.index');
  }

});
