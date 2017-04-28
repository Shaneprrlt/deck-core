import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  icon: DS.attr('string'),
  createdAt: DS.attr('datetime'),
  updatedAt: DS.attr('datetime')
});
