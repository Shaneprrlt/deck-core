import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('cards', function() {
      this.route('new');
      this.route('show', { path: '/:card_id' });
    });

    this.route('decks', function() {
      this.route('new');
    });
    this.route('notifications', function() {});
  });
  this.route('setup', function() {
    this.route('login');
    this.route('register');
    this.route('forgot-password');
  });
});

export default Router;
