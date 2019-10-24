'use strict'

class ConfirmEmailUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required|string|min:20|max:255'
    }
  }

  get messages () {
    return {
      'token.max': 'max validation failed on token, expected max 255 characters',
      'token.min': 'min validation failed on token, expected min 20 characters'
    }
  }

  get sanitizationRules () { }
}

module.exports = ConfirmEmailUpdate
