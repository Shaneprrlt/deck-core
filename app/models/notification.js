import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  action: DS.attr('string'),
  actorType: DS.attr('string'),
  actorId: DS.attr('string'),
  targetType: DS.attr('string'),
  targetId: DS.attr('string'),
  read: DS.attr('boolean'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),

  actor: null,
  target: null,

  notificationCopy: Ember.computed('action', 'actor', 'target', function() {
    let action = this.get('action'),
      actor = this.get('actor'),
      target = this.get('target');

    if(action && actor && target) {
      switch(action) {
        case "created_card":
          return `@${actor.get('username')} created a new card: ${target.get('title')}.`;
          break;
        case "updated_card_status":
          return `@${actor.get('username')} updated card: ${target.get('title')}.`;
          break;
        case "created_card_occurence":
          return `@${actor.get('username')} reported another instance of card: ${target.get('title')}`;
          break;
        case "created_message":
          return `@${actor.get('username')} left a new message.`;
          break;
        case "app_created":
          return `A new app has been created: ${target.get('name')}.`;
          break;
      }
    }
  }),

  setActor: Ember.observer('actorType', 'actorId', function() {
    let _this = this,
      actorType = this.get('actorType'),
      actorId = this.get('actorId');

    switch(actorType) {
      case "User":
        this.store.findRecord('user', actorId)
          .then(function(user) {
            _this.set('actor', user);
          });
        break;
    }
  }).on('init'),

  setTarget: Ember.observer('targetType', 'targetId', function() {
    let _this = this,
      targetType = this.get('targetType'),
      targetId = this.get('targetId');

    switch(targetType) {
      case "Card":
        this.store.findRecord('card', targetId)
          .then(function(card) {
            _this.set('target', card);
          });
        break;

      case "App":
        this.store.findRecord('app', targetId)
          .then(function(app) {
            _this.set('target', app);
          });
        break;
    }
  }).on('init')

});
