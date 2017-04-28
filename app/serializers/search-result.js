import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    platform: { embedded: 'always' },
    cardType: { embedded: 'always' },
    user: { embedded: 'always' },
    deck: { embedded: 'always' },
    card: { embedded: 'always' },
    message: { embedded: 'always' },
    label: { embedded: 'always' }
  }

});
