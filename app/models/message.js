import DS from 'ember-data';

export default DS.Model.extend({
  cardId: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('datetime'),
  updatedAt: DS.attr('datetime'),
  user: DS.belongsTo('user')
});
