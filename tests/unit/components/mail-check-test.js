import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('mail-check', 'MailCheckComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('is shows a generic suggestion when there is not an email', function() {
  var component = this.subject();
  component.set('value', 'foo');
  var $component = this.append();

  Ember.run(function() {
    $component.focus().blur();
  });

  equal(
    $component.find('.mailcheck-hint').text().trim(),
    'You seem to be missing an email domain, like @google.com or @hotmail.com'
  );
});
