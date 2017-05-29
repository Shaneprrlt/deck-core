import Ember from 'ember';

export default Ember.Component.extend({

  app: null,
  developer: null,
  toggleItemMenu: null,

  actions: {
    remove() {
      let developerId = this.get('developer.id'),
        matches = this.get('app.developers');

      this.set('app.developers', matches.filter(function(developer) {
        return developer.get('id') !== developerId;
      }));
    }
  }

});
