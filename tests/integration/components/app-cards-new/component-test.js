import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-cards-new', 'Integration | Component | app cards new', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-cards-new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-cards-new}}
      template block text
    {{/app-cards-new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
