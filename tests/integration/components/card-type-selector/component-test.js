import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-type-selector', 'Integration | Component | card type selector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{card-type-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#card-type-selector}}
      template block text
    {{/card-type-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
