import Ember from 'ember';

export default Ember.Service.extend({

  card: null,

  setContext(params={}) {
    this.setProperties({
      card: params.card
    });
  },

  resetContext() {
    this.setProperties({
      card: null
    });
  }

});
