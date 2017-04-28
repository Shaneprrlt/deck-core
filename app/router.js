import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('app', function() {});
  this.route('setup', function() {
    this.route('login');
    this.route('register');
    this.route('forgot-password');
  });

});

export default Router;
