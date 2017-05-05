import Ember from 'ember';

export default Ember.Controller.extend({

  card: Ember.computed('model.card', function() {
    return this.get('model.card');
  })

});
