'use strict'

class SessionStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      login: 'required|email|max:100',
      password: 'required|string|min:8|max:32'
    }
  }

  get messages () {
    return {
      'login.max': 'max validation failed on login, expected max 100 characters',
      'password.min': 'min validation failed on password, expected min 8 characters',
      'password.max': 'max validation failed on password, expected max 32 characters'
    }
  }

  get sanitizationRules () {
    return {
      login: 'normalize_email'
    }
  }
}

module.exports = SessionStore
