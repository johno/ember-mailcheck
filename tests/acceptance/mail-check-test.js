import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';
var application;

module('Acceptance: MailCheck', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('filling out the mail-check component without an email domain', function(assert) {
  visit('/');

  Ember.run(function() {
    console.log(Ember.inspect(find('*')));
    Ember.$('.mailcheck').find('input').val('foo').blur();
  });

  andThen(function() {
    console.log('boom');
    assert.equal(
      find('.mailcheck-hint').first().text().trim(),
      'You seem to be missing an email domain, like @gmail.com or @hotmail.com'
    );
  });
});
