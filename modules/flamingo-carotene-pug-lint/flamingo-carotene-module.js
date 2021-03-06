const lintHandler = require('./lib/handler/lint')

class PugLint {
  constructor (core) {
    this.listeners = [
      {
        command: 'config',
        priority: 100,
        handler: function (core) {
          const config = core.getConfig()
          config.paths.pugLint = __dirname

          config.pugLint = {
            filesPattern: '/**/*.pug',
            breakOnError: false
          }
        }
      },
      {
        command: 'lint',
        description: 'Lint all PUG Templates',
        handler: lintHandler
      },
      {
        command: 'lintPug',
        description: 'Lint all PUG Templates',
        handler: lintHandler
      },
      {
        command: 'build',
        description: 'Lint all PUG Templates',
        handler: function (core) {
          const config = core.getConfig()
          config.pugLint.breakOnError = true
          lintHandler(core)
        }
      },
      {
        command: 'watchPug',
        handler: lintHandler
      }
    ]
  }

  getListeners () {
    return this.listeners
  }
}

module.exports = PugLint
