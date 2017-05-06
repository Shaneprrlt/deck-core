import Ember from 'ember';

export default Ember.Controller.extend({

  notifications: Ember.computed('model.notifications.@each', function() {
    return this.get('model.notifications');
  })

});
