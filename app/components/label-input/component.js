import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  card: null,
  deck: null,
  query: null,
  searchResults: [],

  hasSearchResults: Ember.computed('searchResults.@each', function() {
    return this.get('searchResults.length') > 0;
  }),

  labels: Ember.computed('card.labels.@each', 'deck.labels.@each', function() {
    let _this = this,
      card = this.get('card'),
      deck = this.get('deck');

    if(card) {
      return card.get('labels');
    } else if(deck) {
      return deck.get('labels');
    }
  }),

  clearSearchResult: Ember.observer('card.labels.@each', 'deck.labels.@each', function() {
    this.send('clearLabels');
  }),

  didInsertElement() {
    this._super(...arguments);
    let _this = this;

    this.$().find("input[name=q]").on('keyup', function(event) {
      if(event.keyCode === 13) {
        _this.send('createLabel');
        this.value = null;
      } else {
        _this.send('searchLabels');
      }
    });
  },

  isInCard(label) {
    let labelId = label.get('id'),
      matches = [];

    if(this.get('card')) {
      this.get('card.labels').forEach(function(label) {
        if(label.get('id') === labelId) {
          matches.pushObject(label);
        }
      });
    }

    return matches.length > 0;
  },

  isInDeck(label) {
    let labelId = label.get('id'),
      matches = [];

    if(this.get('deck')) {
      this.get('deck.labels').forEach(function(label) {
        if(label.get('id') === labelId) {
          matches.pushObject(label);
        }
      });
    }

    return matches.length > 0;
  },

  actions: {
    createLabel() {
      let _this = this,
        query = this.get('query'),
        label = this.get('store').createRecord('label', { title: query });

      label.save().then(function(label) {
        _this.get('card.labels').pushObject(label);
      }).catch(function(error) {
        // fail silently
      });
    },

    searchLabels() {
      let _this = this,
        query = this.get('query');

      this.get('store').query('label', { q: query }).then(function(labels) {
        _this.set('searchResults', labels.filter(function(label) {
          return !_this.isInCard(label) && !_this.isInDeck(label);
        }));
      }).catch(function() {
        _this.send('clearLabels');
      });
    },

    clearLabels() {
      this.set('searchResults', []);
    }
  }

});
