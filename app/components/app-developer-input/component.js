import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  app: null,
  query: null,
  searchResults: [],

  hasSearchResults: Ember.computed('searchResults.@each', function() {
    return this.get('searchResults.length') > 0;
  }),

  developers: Ember.computed('app.developers.@each', function() {
    return this.get('app.developers');
  }),

  filteredSearchResults: Ember.computed('app.developers.@each', 'searchResults.@each', function() {
    let _this = this;
    return this.get('searchResults').filter(function(developer) {
      return !_this.isInAppDevelopers(developer);
    });
  }),

  didInsertElement() {
    this._super(...arguments);
    let _this = this;

    this.$().find("input[name=q]").on('keyup', function() {
      _this.send('searchDevelopers');
    })
  },

  willDestroy() {
    let app = this.get('app');
    if(app.get('isNew')) {
      app.unloadRecord();
    }
  },

  isInAppDevelopers(user) {
    let userId = user.get('id'),
      matches = [];

    if(this.get('app')) {
      this.get('app.developers').forEach(function(user) {
        if(user.get('id') === userId) {
          matches.pushObject(user);
        }
      })
    }

    return matches.length > 0;
  },

  actions: {
    searchDevelopers() {
      let _this = this,
        query = this.get('query');

      this.get('store').query('user', { q: query, rs: 'developer' }).then(function(users) {
        _this.set('searchResults', users.filter(function(user) {
          return !_this.isInAppDevelopers(user);
        }));
      }).catch(function() {
        _this.send('clearSearchResults');
      });
    },

    clearSearchResults() {
      this.set('searchResults', []);
    }
  }

});
