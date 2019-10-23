'use strict'

class UserUpdateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|integer',
      login: 'email|unique:users,login',
      password: 'confirmed|min:8'
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

module.exports = UserUpdateUser
