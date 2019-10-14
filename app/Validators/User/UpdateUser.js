'use strict'

class UserUpdateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|integer',
      name: 'string',
      email: 'email|unique:users,email',
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
      email: 'normalize_email'
    }
  }
}

module.exports = UserUpdateUser
