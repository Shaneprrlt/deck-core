import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isLabel', 'isApp'],

  card: null,
  label: null,

  isLabel: Ember.computed('label.app', function() {
    return this.get('label.app.id') == null;
  }),

  isApp: Ember.computed('label.app', function() {
    return this.get('label.app.id') != null;
  }),

  isInCard: Ember.computed('card', 'label', function() {
    let labelId = this.get('label.id'),
      matches = [];

    this.get('card.labels').forEach(function(label) {
      if(label.get('id') === labelId) {
        matches.pushObject(label);
      }
    });

    return matches.length > 0;
  }),

  click() {
    if(!this.get('isInCard')) {
      let label = this.get('label');
      this.get('card.labels').pushObject(label);
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
    }
  }

});
