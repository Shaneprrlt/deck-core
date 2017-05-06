import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['q'],
  
  q: null,

  searchResults: Ember.computed('model.searchResults.@each', function() {
    return this.get('model.searchResults');
  })

});
