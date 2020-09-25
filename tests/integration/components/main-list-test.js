import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders main-list', async function(assert) {
    await render(hbs`<MainList />`);

    assert.dom('label').exists();
    assert.dom('label span').exists();
    assert.dom('label span').hasText('What movie would you like to search ?');
    assert.dom('label p').exists();
  });
});
