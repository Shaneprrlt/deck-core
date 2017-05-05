import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  card: null,
  messages: null,

  setMessages: Ember.observer('card.updatedAt', function() {
    let _this = this,
      card = this.get('card');

    this.get('store').query('message', { card_id: card.get('id') }).then(function(messages) {
      _this.set('messages', messages);
    });
  }).on('didInsertElement')

});
