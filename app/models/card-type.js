import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  icon: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  isBug: Ember.computed('name', function() {
    return this.get('name').toLowerCase() === 'bug';
  }),

  isFeature: Ember.computed('name', function() {
    return this.get('name').toLowerCase() === 'feature request';
  })

});
