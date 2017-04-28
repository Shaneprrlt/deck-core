import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  subdomain: DS.attr('string'),
  email: DS.attr('string'),
  timezone: DS.attr('string'),
  channel: DS.attr('string'),
  blocked: DS.attr('boolean')
});
