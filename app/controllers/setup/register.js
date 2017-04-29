import Ember from 'ember';

export default Ember.Controller.extend({

  team: Ember.computed('model.team', function() {
    return this.get('model.team');
  }),

  user: Ember.computed('model.user', function() {
    return this.get('model.user');
  })

});
