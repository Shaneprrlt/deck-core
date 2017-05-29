import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForQuery() {
    return this.urlPrefix() + '/users/search';
  }

});
