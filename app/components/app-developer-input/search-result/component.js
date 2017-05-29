import Ember from 'ember';

export default Ember.Component.extend({

  app: null,
  developer: null,

  click() {
    let developer = this.get('developer');
    this.get('app.developers').pushObject(developer);
  }

});
