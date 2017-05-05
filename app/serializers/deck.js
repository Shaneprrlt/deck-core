import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    labels: { embedded: 'always' },
    cards: { embedded: 'always' }
  },

  serialize(snapshot, options) {
    let json = this._super(...arguments);

    json.labels = json.labels.map(function(label) {
      return label.id;
    });

    return json;
  }

});
