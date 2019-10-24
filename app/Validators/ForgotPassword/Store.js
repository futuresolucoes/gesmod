'use strict'

class ForgotPasswordStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      login: 'required|email|max:255',
      name: 'string|min:3'
    }
  }

  get messages () {
    return {
      'login.max': 'max validation failed on login, expected max 255 characters',
      'name.min': 'min validation failed on name, expected min 3 characters'
    }
  }

  get sanitizationRules () {
    return {
      login: 'normalize_email'
    }
  }
}

module.exports = ForgotPasswordStore
