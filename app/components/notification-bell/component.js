import Ember from 'ember';

export default Ember.Component.extend({

  notifications: null,

  unreadNotifications: Ember.computed('notifications.@each', function() {
    return this.get('notifications').filterBy('read', false);
  }),

  showIndicator: Ember.computed('unreadNotifications.@each', function() {
    return this.get('unreadNotifications.length') > 0;
  })

});
