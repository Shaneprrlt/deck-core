import Ember from 'ember';
import request from 'ember-ajax/request';

export default Ember.Component.extend({

  classNameBindings: ['isUnread'],

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service(),
  coach: Ember.inject.service(),
  store: Ember.inject.service(),

  notification: null,

  isUnread: Ember.computed('notification.read', function() {
    return !this.get('notification.read');
  }),

  click() {
    let notification = this.get('notification');

    if(!notification.get('read')) {
      this.send('markAsRead');
    }

    if(notification.get('targetType') === "Card") {
      this.get('routing').transitionTo('app.cards.show', [
        notification.get('targetId')
      ]);
    }
  },

  actions: {
    markAsRead() {
      let _this = this,
        accessToken = this.get('session.data.authenticated.access_token'),
        apiHost = this.get('coach.apiHost'),
        url = apiHost + "/notifications/" + this.get('notification.id') + "/mark_as_read",
        options = {
          type: "put",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        };

      request(url, options)
        .then(function(response) {
            _this.get('store').pushPayload(response);
          })
        .catch(function(reason) {
            debugger;
          });
    }
  }

});
