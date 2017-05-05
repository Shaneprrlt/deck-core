import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isLabel', 'isApp'],

  card: null,
  deck: null,
  label: null,

  isLabel: Ember.computed('label.app', function() {
    return this.get('label.app.id') == null;
  }),

  isApp: Ember.computed('label.app', function() {
    return this.get('label.app.id') != null;
  }),

  isInCard: Ember.computed('card.labels.@each', 'label', function() {
    let labelId = this.get('label.id'),
      matches = [];

    if(this.get('card')) {
      this.get('card.labels').forEach(function(label) {
        if(label.get('id') === labelId) {
          matches.pushObject(label);
        }
      });
    }

    return matches.length > 0;
  }),

  isInDeck: Ember.computed('deck.labels.@each', 'label', function() {
    let labelId = this.get('label.id'),
      matches = [];

    if(this.get('deck')) {
      this.get('deck.labels').forEach(function(label) {
        if(label.get('id') === labelId) {
          matches.pushObject(label);
        }
      });
    }

    return matches.length > 0;
  }),

  isEitherInCardOrDeck: Ember.computed('isInCard', 'isInDeck', function() {
    return this.get('isInCard') || this.get('isInDeck');
  }),

  click() {
    if(this.get('card') && !this.get('isInCard')) {
      let label = this.get('label');
      this.get('card.labels').pushObject(label);
    }

    if(this.get('deck') && !this.get('isInDeck')) {
      let label = this.get('label');
      this.get('deck.labels').pushObject(label);
    }
  },

  actions: {
    delete() {
      if(this.get('isInCard')) {
        let labelId = this.get('label.id'),
          matches = this.get('card.labels');

        this.set('card.labels', matches.filter(function(label) {
          return label.get('id') !== labelId;
        }));
      }

      if(this.get('isInDeck')) {
        let labelId = this.get('label.id'),
          matches = this.get('deck.labels');

        this.set('deck.labels', matches.filter(function(label) {
          return label.get('id') !== labelId;
        }));
      }
    }
  }

});
