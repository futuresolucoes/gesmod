'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      fantasy_name: 'string',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed|min:8'
    }
  }

  get messages () {
    return {
      'password.min': 'min validation failed on password, expected 8 characters'
    }
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email'
    }
  }
}

module.exports = StoreUser
