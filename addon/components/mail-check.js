import Ember from 'ember';

export default Ember.Component.extend({
  type: 'email',
  name: 'email',
  value: '',
  placeholder: '',
  suggestion: '',
  classNames: ['mailcheck'],

  actions: {
    mailcheck: function() {
      var _this = this;
      Mailcheck.run({
        email: _this.value,
        suggested: function(suggestion) {
          var message = 'Did you mean ';
          _this.set('hint', message);
          _this.set('suggestion', suggestion.full);
        },
        empty: function() {
          var message = 'You seem to missing an email domain, like @google.com or @hotmail.com';
          _this.set('hint', message);
          _this.set('suggestion', null);
        }
      });
    },

    useSuggestion: function() {
      this.set('value', this.get('suggestion'));
    }
  }
});
