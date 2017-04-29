import Ember from 'ember';

export default Ember.Service.extend({

  playLogin() {
    let audio = new Audio("/assets/arpeggio.mp3");
    audio.volume = 0.4;
    audio.play();
  },

  playNotification() {
    let audio = new Audio("/assets/job-done.mp3");
    audio.volume = 0.4;
    audio.play();
  }

});
