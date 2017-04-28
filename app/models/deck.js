import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('datetime'),
  updatedAt: DS.attr('datetime'),

  labels: DS.hasMany('label'),
  cards: DS.hasMany('card')
});
