import Ember from 'ember';

export default Ember.Component.extend({

  message: null,

  user: Ember.computed('message.user', function() {
    return this.get('message.user');
  }),

});
