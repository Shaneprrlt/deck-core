import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr('number'),
  type: DS.attr('string'),

  platform: DS.belongsTo('platform'),
  cardType: DS.belongsTo('cardType'),
  user: DS.belongsTo('user'),
  deck: DS.belongsTo('deck'),
  card: DS.belongsTo('card'),
  message: DS.belongsTo('message'),
  label: DS.belongsTo('label')
});
