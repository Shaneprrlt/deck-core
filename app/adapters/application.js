import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: Ember.computed(function() {
    let namespace = 'www';
    return ENV['API_URL_PREFIX'] + namespace + ENV['API_URL_SUFFIX'];
  }),

  namespace: '/',

});
