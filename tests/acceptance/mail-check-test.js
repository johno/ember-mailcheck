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
    Ember.$('.mailcheck').find('input').first().val('foo').focus().blur();
  });

  andThen(function() {
    equal(
      Ember.$('.mailcheck-hint').text().trim(),
      'You seem to be missing an email domain, like @google.com or @hotmail.com'
    );
  });
});

test('filling out the mail-check component with a misspelled email domain', function() {
  visit('/');

  Ember.run(function() {
    Ember.$('.mailcheck').find('input').first().val('foo@yaho.com').focus().blur();
  });

  andThen(function() {
    equal(
      Ember.$('.mailcheck-hint').text().trim(),
      'Did you mean foo@yahoo.com?'
    );
  });
});
