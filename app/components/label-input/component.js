import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  card: null,
  query: null,
  searchResults: [],

  hasSearchResults: Ember.computed('searchResults.@each', function() {
    return this.get('searchResults.length') > 0;
  }),

  clearSearchResult: Ember.observer('card.labels.@each', function() {
    this.send('clearLabels');
  }),

  didInsertElement() {
    this._super(...arguments);
    let _this = this;

    this.$().find("input[name=q]").on('keyup', function(event) {
      _this.send('searchLabels');
    });
  },

  actions: {
    searchLabels() {
      let _this = this,
        query = this.get('query');

      this.get('store').query('label', { q: query }).then(function(labels) {
        _this.set('searchResults', labels.map(function(label) {
          return label;
        }));
      }).catch(function(error) {
        _this.send('clearLabels');
      });
    },

    clearLabels() {
      this.set('searchResults', []);
    }
  }

});
