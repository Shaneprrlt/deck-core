import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForQuery() {
    return this.urlPrefix() + '/search';
  }

});
