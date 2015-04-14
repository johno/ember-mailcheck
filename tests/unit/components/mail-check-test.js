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

test('it adds the component with the correct attributes', function(assert) {
  var component = this.subject();
  this.append();

  assert.ok(component.$().hasClass('mailcheck'));
  assert.ok(component.$().find('input').length);
  assert.ok(component.$().find('input').hasClass('mailcheck-input'));
  assert.ok(!component.$().find('.mailcheck-hint').length);
});

test('it adds a hint when there is no email', function(assert) {
  var component = this.subject();
  this.append();

  Ember.run(function() {
    component.$().find('input').val('').blur();
  });

  assert.equal(
    component.$().find('.mailcheck-hint').text().trim(),
    'You seem to be missing an email domain, like @gmail.com or @hotmail.com'
  );
});
