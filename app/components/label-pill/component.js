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

    this.get('card.labels').forEach(function(label, i) {
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
  }

});
