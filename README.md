# ember-mailcheck [![Build Status](https://travis-ci.org/johnotander/ember-mailcheck.svg?branch=master)](https://travis-ci.org/johnotander/ember-mailcheck) [![Ember Observer Score](http://emberobserver.com/badges/ember-mailcheck.svg)](http://emberobserver.com/addons/ember-mailcheck)

An Ember component for the [mailcheck](https://github.com/mailcheck/mailcheck) library to
improve the UX of your app by suggesting a domain when your users misspell it in an email address.

## Installation

For Ember CLI >= `0.2.3`

```
ember install ember-mailcheck
```

For Ember CLI < `0.2.3`

```
ember install:addon ember-mailcheck
```

## Usage

In order to create an email input, you can call the `mail-check` component like so:

```hbs
{{mail-check}}
```

Upon blur, the email will be validated with mailcheck. If there is no email domain the
user will see the following hint: `You seem to be missing an email domain, like @gmail.com or @hotmail.com`.

If there's a typo in the email field, like `johnotander@gmal.com`, a hint will appear that
says `Did you mean johnotander@gmail.com?`. As an added convenience, the email is clickable,
and will automatically populate the input when clicked.

#### An example with a set value:

```hbs
{{mail-check value=user.email}}
```

#### An example with all the options:

```hbs
{{mail-check
  name='email'
  type='email'
  inputClass='form-input'
  placeholder='Enter your email'
  hintMessage='That does not look like a valid email address'
  suggestionMessage='Did you mean to type'
  disabled=false
  required=true
  title='Provide an email'}}
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Thanks to the following

* <https://github.com/mailcheck/mailcheck>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com)([@4lpine](https://twitter.com/4lpine)).
