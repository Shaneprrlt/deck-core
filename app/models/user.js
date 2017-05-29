import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  name: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  timezone: DS.attr('string'),
  phone: DS.attr('string'),
  channel: DS.attr('string'),
  blocked: DS.attr('boolean'),

  roles: DS.hasMany('role'),
  preference: DS.belongsTo('role'),

  isAdmin: Ember.computed('roles.@each', function() {
    return this.get('roles').filterBy('name', 'admin').get('length') > 0;
  }),

  isDeveloper: Ember.computed('roles.@each', function() {
    return this.get('roles').filterBy('name', 'developer').get('length') > 0;
  }),

  isBasic: Ember.computed('roles.@each', function() {
    return this.get('roles').filterBy('name', 'basic').get('length') > 0;
  })

});
