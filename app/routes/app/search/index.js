import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: {
      refreshModel: true
    }
  },

  store: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      searchResults: this.get('store').query('search-result', { q: params.q })
    });
  }

});
