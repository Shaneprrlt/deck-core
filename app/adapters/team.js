import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForQueryRecord() {
    return this.urlPrefix() + '/teams/query_record';
  }

});
