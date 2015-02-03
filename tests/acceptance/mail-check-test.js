import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: MailCheck', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('filling out the mail-check component without an email domain', function() {
  visit('/');

  Ember.run(function() {
    Ember.$('.mailcheck').find('input').val('foo').blur();
  });

  andThen(function() {
    equal(
      Ember.$('.mailcheck-hint').first().text().trim(),
      'You seem to be missing an email domain, like @gmail.com or @hotmail.com'
    );
  });
});
