import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-developer-input/search-result', 'Integration | Component | app developer input/search result', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-developer-input/search-result}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-developer-input/search-result}}
      template block text
    {{/app-developer-input/search-result}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
