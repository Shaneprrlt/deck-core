import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  findCards(id) {
    return this.ajax(this.urlForFindCardsAction(id), 'GET');
  },

  urlForFindCardsAction(id) {
    return `${this.buildURL('app', id)}/cards`;
  }

});
