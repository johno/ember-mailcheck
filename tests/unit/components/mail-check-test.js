import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('mail-check', 'MailCheckComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('it adds the correct class', function(assert) {
  var component = this.subject();
  this.append();

  assert.ok(component.$().hasClass('mailcheck'));
});

test('it contains the email input', function(assert) {
  var component = this.subject();
  this.append();

  assert.ok(component.$().find('input').length);
});
