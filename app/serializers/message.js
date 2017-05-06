import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    card: { serialize: 'ids', deserialize: 'record' },
    user: { embedded: 'always' }
  }

});
