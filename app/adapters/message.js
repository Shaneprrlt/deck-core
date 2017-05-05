import ApplicationAdapter from './application';
import UrlTemplates from 'ember-data-url-templates';
import Ember from 'ember';

export default ApplicationAdapter.extend(UrlTemplates, {

  adapterContext: Ember.inject.service(),

  urlTemplate: '{+host}/cards/{cardId}/messages{/id}',

  urlSegments: {
    cardId() {
      return this.get('adapterContext.card.id');
    }
  }

});
