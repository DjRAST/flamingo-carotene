# Module `flamingo-carotene-pug`

The pug module compiles the [pug](https://github.com/pugjs/pug) templates in a Flamingo Carotene project. It takes all
the files defined by a glob pattern and saves the AST (abstract syntax tree) compilation to the configured dist folder.

The Flamingo framework will then take care of rendering these AST files to HTML.

## How to use

```bash
npm i -D flamingo-carotene-pug
```

The pug module will listen to the following commands: `buildTemplates`, `build`, `watchPug`.

## How it works

A child process will be opened to execute the compilation of the pug files and store the AST to the configured dist
location.

## How to configure

This module exposes the following config
```js
config.paths.pug = {
  fileMode: 'ast',
  src: path.join(config.paths.src, 'page'),
  dist: path.join(config.paths.dist, 'template', 'page')
}
```
`ast` Target filemode. 'ast' and 'html' is supported.
- 'ast' Renders a JSON-AST representation of the pug file (default)
- 'html' Renders HTML 

`src` Path to the pug source files

`dist` Path to the AST files

```js
config.pug = {
  filesPattern: '/{*,.,*/page/*}/{.,*,*/*.partial}/*.pug',
  buildCallback: null || function,
  useRelativeSrc: false,
  breakOnError: false
}
```

`filesPattern` Glob pattern to find the files inside the src path

`useRelativeSrc` If set to true, the compiled files will be stored to 'paths.pug.dist' relative to its sourc.
#### Example:
config.paths.src = '/foo'
config.paths.pug.src = '/foo/pugPages'
config.paths.pug.dist = '/htdocs'

##### useRelativeSrc = FALSE
a template called "index" will be stored into '/htdocs/pugPages'
a template called "test/index" will be stored into '/htdocs/pugPages/test'

##### useRelativeSrc = TRUE
a template called "index" will be stored into '/htdocs'
a template called "test/index" will be stored into '/htdocs/test'

`buildCallback` The callback function to execute when the template compilation was finished

`breakOnError` True to break the process when an error occurred, false to only write it to output. Will be set to true
for production build automatically.

