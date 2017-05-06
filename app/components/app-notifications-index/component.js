import Ember from 'ember';
import request from 'ember-ajax/request';

export default Ember.Component.extend({

  coach: Ember.inject.service(),
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  notifications: null,

  sortPropertes: ['createdAt:desc'],
  sortedNotifcations: Ember.computed.sort('notifications', 'sortPropertes'),

  actions: {
    markAllAsRead() {
      let _this = this,
        accessToken = this.get('session.data.authenticated.access_token'),
        apiHost = this.get('coach.apiHost');

      let url = apiHost + "/notifications/mark_all_as_read",
        options = {
          type: "put",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        };

      request(url, options)
        .then(function(response) {
            let notifications = response.notifications;
            _this.get('store').pushPayload(response);
          })
        .catch(function(reason) {
            debugger;
          });
    }
  }

});
