import Ember from 'ember';
import Mailcheck from 'mailcheck';

export default Ember.Component.extend({
  type: 'email',
  name: 'email',
  value: '',
  placeholder: '',
  suggestion: '',
  inputClass: 'mailcheck-input',
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
          var email = _this.value;

          if (isEmail(email)) {
            _this.set('hint', null);
            _this.set('suggestion', null);
            return;
          }

          var message = 'You seem to be missing an email domain, like @gmail.com or @hotmail.com';

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

function isEmail(email) {
  return Ember.isPresent(email) &&
         /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(email);
}
