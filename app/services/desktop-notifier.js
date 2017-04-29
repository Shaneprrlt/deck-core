import Ember from 'ember';

export default Ember.Service.extend({

  routing: Ember.inject.service('-routing'),
  sound: Ember.inject.service(),

  sendMessage(notificationId, title, body, imageUrl=null, notificationUrl=null, resource=null) {

    let _this = this;

    let n = new Notification(title, {
      body: body,
      lang: "en",
      badge: imageUrl,
      image: imageUrl,
      tag: notificationId,
      renotify: true,
      silent: true
    });

    n.onclick = function(event) {
      if (notificationUrl && resource) {
        _this.get('routing').transitionTo(notificationUrl, resource);
      } else if (notificationUrl) {
        _this.get('routing').transitionTo(notificationUrl);
      }
    };

    this.get('sound').playNotification();
  },

  testNotification() {
    this.sendMessage(1, "Deck, Inc.", "Hello, world!", "/assets/app_icon@3x.png")
  }

});
