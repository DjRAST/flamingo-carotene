class Socket {
  constructor (core) {
    this.config = core.getConfig()
    this.cliTools = core.getCliTools()
    this.io = null
    core.getJobmanager().setReportCallback(this.report.bind(this))
  }

  init () {
    if (this.io) {
      return
    }

    this.io = require('socket.io')()

    this.io.on('connection', (client) => {
      this.io.emit('connected', this.config.devServer)
    })

    this.io.listen(this.config.devServer.port)
  }

  report (reportData) {
    if (this.io) {
      this.io.emit('report', reportData)
    }
  }

  reportBuildOutput(output) {
    if (this.io) {
      this.io.emit('buildOutput', output)
    }
  }

  emit (eventName, eventData) {
    this.io.emit(eventName, eventData)
  }
}

module.exports = Socket
