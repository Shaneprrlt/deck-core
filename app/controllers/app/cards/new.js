import Ember from 'ember';

export default Ember.Controller.extend({

  cardTypes: Ember.computed('model.cardTypes.@each', function() {
    return this.get('model.cardTypes');
  }),

  apps: Ember.computed('model.apps.@each', function() {
    return this.get('model.apps');
  })

});
