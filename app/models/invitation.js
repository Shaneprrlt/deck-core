import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  admin: DS.attr('boolean'),
  accepted: DS.attr('boolean')
});
