import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  casino: Ember.inject.service(),
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  team: null,
  notifications: null,
  query: null,
  showUserMenu: false,

  didInsertElement() {
    this._super(...arguments);

    let _this = this;

    this.$().find("input[type=text]").on('keyup', function(event) {
      if(event.keyCode === 13) {
        _this.send('search');
      }
    });
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    },

    search() {
      this.get('routing').transitionTo('app.search.index', [], {
        q: this.get('query')
      });
    },

    openCreateCard() {
      this.get('casino').set('casino.fullscreen', false);
      this.get('routing').transitionTo('app.cards.new');
    },

    toggleUserMenu() {
      this.set('showUserMenu', !this.get('showUserMenu'));
    }
  }

});
