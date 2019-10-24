'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string|min:3|max:60',
      login: 'required|email|max:60|unique:users,login',
      password: 'required|confirmed|min:8|max:32'
    }
  }

  get messages () {
    return {
      'name.min': 'min validation failed on name, expected min 3 characters',
      'name.max': 'min validation failed on name, expected max 60 characters',
      'password.min': 'min validation failed on password, expected min 8 characters',
      'password.max': 'min validation failed on password, expected max 32 characters'
    }
  }

  get sanitizationRules () {
    return {
      login: 'normalize_email'
    }
  }
}

module.exports = StoreUser
