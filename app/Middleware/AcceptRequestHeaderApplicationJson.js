'use strict'

class AcceptRequestHeaderApplicationJson {
  async handle ({ request }, next) {
    const headers = request.headers()
    headers.accept = 'application/json'

    await next()
  }
}

module.exports = AcceptRequestHeaderApplicationJson
