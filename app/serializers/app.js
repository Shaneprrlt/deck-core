import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    platform: { embedded: 'always' },
    developers: { embedded: 'always' }
  },

  serialize(snapshot, options) {
    let json = this._super(...arguments);

    json.platform_id = json.platform.id;

    delete json.platform;

    json.developers = json.developers.map(function(developer) {
      return developer.id;
    });
    
    return json;
  }

});
