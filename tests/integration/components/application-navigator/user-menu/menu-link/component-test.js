import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application-navigator/user-menu/menu-link', 'Integration | Component | application navigator/user menu/menu link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application-navigator/user-menu/menu-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#application-navigator/user-menu/menu-link}}
      template block text
    {{/application-navigator/user-menu/menu-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
