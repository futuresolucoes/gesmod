'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      login: 'required|email|unique:users,login',
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
      login: 'normalize_email'
    }
  }
}

module.exports = StoreUser
