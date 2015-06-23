import Ember from 'ember';
import Mailcheck from 'mailcheck';

export default Ember.Component.extend({
  type: 'email',
  name: 'email',
  value: '',
  placeholder: '',
  suggestion: '',
  hintMessage: 'You seem to be missing an email domain, like @gmail.com or @hotmail.com',
  suggestionMessage: 'Did you mean',
  inputClass: 'mailcheck-input',
  classNames: ['mailcheck'],
  disabled : false,
  required: false,
  title: null,

  actions: {
    mailcheck: function() {
      var _this = this;

      Mailcheck.run({
        email: _this.value,
        suggested: function(suggestion) {
          _this.set('hint', _this.get('suggestionMessage') + ' ');
          _this.set('suggestion', suggestion.full);
        },
        empty: function() {
          var email = _this.value;

          if (isEmail(email)) {
            _this.set('suggestion', null);
            _this.set('hint', null);
            return;
          }

          _this.set('hint', _this.get('hintMessage'));
          _this.set('suggestion', null);
        }
      });
    },

    useSuggestion: function() {
      this.set('value', this.get('suggestion'));
      this.set('suggestion', null);
      this.set('hint', null);
    }
  }
});

function isEmail(email) {
  return Ember.isPresent(email) &&
         /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(email);
}
