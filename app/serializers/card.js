import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    user: { embedded: 'always' },
    cardType: { embedded: 'always' },
    app: { embedded: 'always' },
    labels: { embedded: 'always' }
  }

});
