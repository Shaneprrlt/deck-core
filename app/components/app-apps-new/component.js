import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['viewport'],

  session: Ember.inject.service(),
  store: Ember.inject.service(),

  platforms: null,
  app: Ember.computed(function() {
    return this.get('store').createRecord('app');
  }),

  actions: {
    selectPlatform(platformId) {
      let platform = this.get('store').peekRecord('platform', platformId);
      this.set('app.platform', platform);
    },

    createApp() {
      this.get('app').save().then(function() {
        debugger;
      }).catch(function(error) {
        debugger;
      });
    }
  }

});
