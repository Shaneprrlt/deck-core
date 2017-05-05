import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    user: { embedded: 'always' },
    cardType: { embedded: 'always' },
    app: { embedded: 'always' },
    labels: { embedded: 'always' }
  },

  serialize(snapshot, options) {
    let json = this._super(...arguments);

    json.card_type_id = json.card_type.id;
    json.app_id = json.app.id;

    delete json.card_type;
    delete json.app;

    json.labels = json.labels.map(function(label) {
      return label.id;
    });
    
    return json;
  }

});
