import DS from 'ember-data';

export default DS.Model.extend({
  cardIsCreated: DS.attr(),
  cardChangesStatus: DS.attr(),
  previousCardReoccurs: DS.attr(),
  messageIsCreated: DS.attr(),
  appIsCreated: DS.attr()
});
