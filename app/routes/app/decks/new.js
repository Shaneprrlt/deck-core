import Ember from 'ember';

export default Ember.Route.extend({

  casino: Ember.inject.service(),

  beforeModel() {
    this.get('casino').set('casino.fullscreen', false);
  },

});
