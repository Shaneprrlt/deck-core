import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  card: null,
  body: null,

  didInsertElement() {
    this._super(...arguments);

    let _this = this;

    this.$().find('input[type=text]').on('keyup', function(event) {
      if(event.keyCode === 13) {
        _this.send('sendMessage');
      }
    })
  },

  actions: {
    sendMessage() {
      let _this = this,
        message = this.get('store').createRecord('message', {
          body: this.get('body')
        });

      message.save()
        .then(function(message) {
            _this.set('body', null);
          })
        .catch(function(error) {
            // todo: gracefully exit
          });
    }
  }

});
