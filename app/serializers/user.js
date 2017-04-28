import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    roles: { embedded: 'always' },
    preference: { embedded: 'always' }
  }

});
