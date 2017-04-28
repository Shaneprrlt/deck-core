import DS from 'ember-data';

export default DS.Model.extend({
  action: DS.attr('string'),
  actorType: DS.attr('string'),
  actorId: DS.attr('string'),
  targetType: DS.attr('string'),
  targetId: DS.attr('string'),
  read: DS.attr('boolean')
});
