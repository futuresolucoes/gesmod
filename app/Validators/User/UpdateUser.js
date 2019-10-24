'use strict'

class UserUpdateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|integer',
      name: 'string|min:3|max:60',
      login: 'email|unique:users,login',
      password: 'confirmed|min:8'
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

module.exports = UserUpdateUser
