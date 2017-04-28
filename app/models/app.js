import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('datetime'),
  updatedAt: DS.attr('datetime'),

  developers: DS.hasMany('user')
});
