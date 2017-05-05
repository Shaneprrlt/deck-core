import DS from 'ember-data';

export default DS.Model.extend({
  cardId: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  card: DS.belongsTo('card'),
  user: DS.belongsTo('user')
});
