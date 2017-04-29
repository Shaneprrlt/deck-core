import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  state: DS.attr('string'),
  uuid: DS.attr('string'),
  occurences: DS.attr('number'),
  shareUrl: DS.attr('string'),
  channel: DS.attr('string'),
  following: DS.attr('boolean'),
  createdAt: DS.attr('datetime'),
  updatedAt: DS.attr('datetime'),

  user: DS.belongsTo('user'),
  cardType: DS.belongsTo('cardType'),
  app: DS.belongsTo('app'),
  labels: DS.hasMany('labels')
});
