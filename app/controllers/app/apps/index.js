import Ember from 'ember';

export default Ember.Controller.extend({

  apps: Ember.computed('model.apps.@each', function() {
    return this.get('model.apps');
  })

});
