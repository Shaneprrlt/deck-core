import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'deck/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {

  coach: Ember.inject.service(),

  host: Ember.computed(function() {
    let namespace = 'www';
    return ENV['API_URL_PREFIX']
      + this.get('coach.subdomain')
      + ENV['API_URL_SUFFIX'];
  }),
  namespace: '',
  authorizer: 'authorizer:oauth2',

  pathForType(type) {
		let underscored = Ember.String.underscore(type);
		return Ember.String.pluralize(underscored);
	}

});
