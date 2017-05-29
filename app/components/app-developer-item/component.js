import Ember from 'ember';

export default Ember.Component.extend({

  app: null,
  developer: null,
  showItemMenu: false,

  actions: {
    toggleItemMenu() {
      this.set('showItemMenu', !this.get('showItemMenu'));
    }
  }

});
