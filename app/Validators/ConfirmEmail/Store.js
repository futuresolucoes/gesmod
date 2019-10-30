'use strict'

class ConfirmEmailStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|max:100'
    }
  }

  get messages () {
    return {
      'login.max': 'max validation failed on login, expected max 100 characters'
    }
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email'
    }
  }
}

module.exports = ConfirmEmailStore
