import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  resourceType: DS.attr('string'),
  resourceId: DS.attr('string')
});
