import Ember from 'ember';
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
  label: DS.belongsTo('label'),

  isPlatform: Ember.computed(function() {
    return this.get('type') === "platform";
  }),

  isCardType: Ember.computed(function() {
    return this.get('type') === "card_type";
  }),

  isUser: Ember.computed(function() {
    return this.get('type') === "user";
  }),

  isDeck: Ember.computed(function() {
    return this.get('type') === "deck";
  }),

  isCard: Ember.computed(function() {
    return this.get('type') === "card";
  }),

  isMessage: Ember.computed(function() {
    return this.get('type') === "message";
  }),

  isLabel: Ember.computed(function() {
    return this.get('type') === "label";
  })

});
