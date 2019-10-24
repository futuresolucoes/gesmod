'use strict'

class ForgotPasswordUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required|string|min:20|max:255',
      password: 'required|string|confirmed|min:8|max:32'
    }
  }

  get messages () {
    return {
      'token.min': 'min validation failed on token, expected min 20 characters',
      'token.max': 'max validation failed on token, expected max 255 characters',
      'password.min': 'min validation failed on password, expected min 8 characters',
      'password.max': 'max validation failed on password, expected max 32 characters'
    }
  }

  get sanitizationRules () { }
}

module.exports = ForgotPasswordUpdate
