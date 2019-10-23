'use strict'

class ConfirmEmailStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string|max:60',
      login: 'required|email|max:100'
    }
  }

  get messages () {
    return {
      'login.max': 'max validation failed on login, expected max 100 characters',
      'name.max': 'max validation failed on name, expected max 60 characters'
    }
  }

  get sanitizationRules () {
    return {
      login: 'normalize_email'
    }
  }
}

module.exports = ConfirmEmailStore
