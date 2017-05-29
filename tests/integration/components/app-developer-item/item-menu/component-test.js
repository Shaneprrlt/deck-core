import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-developer-item/item-menu', 'Integration | Component | app developer item/item menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-developer-item/item-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-developer-item/item-menu}}
      template block text
    {{/app-developer-item/item-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
