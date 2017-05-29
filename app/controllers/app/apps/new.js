import Ember from 'ember';

export default Ember.Controller.extend({

  platforms: Ember.computed('model.platforms.@each', function() {
    return this.get('model.platforms');
  })

});
