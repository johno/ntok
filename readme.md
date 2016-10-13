# ntok

A teeny cli tool to get your npm token env variable (for the lazy).

## Installation

```bash
npm i -g ntok
```

## Usage

```sh
ntok -h
```

On MacOS, export the env variable in one fell swoop:

```sh
ntok -s | pbcopy && export NPM_TOKEN=$(pbpaste)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
