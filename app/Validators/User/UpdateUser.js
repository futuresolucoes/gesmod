'use strict'

class UserUpdateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      first_name: 'string|min:3|max:60',
      last_name: 'string|min:3|max:60',
      cpf: 'string|min:11|max:11',
      email: 'email|max:60',
      birthday: 'date',
      phone: 'string|min:12|max:13',
      phone_secondary: 'string|min:12|max:13',
      gender: 'string|max:20',
      password: 'confirmed|min:8|max:32'
    }
  }

  get messages () {
    return {
      'first_name.min': 'min validation failed on first_name, expected min 3 characters',
      'first_name.max': 'max validation failed on first_name, expected max 60 characters',
      'last_name.min': 'min validation failed on last_name, expected min 3 characters',
      'last_name.max': 'max validation failed on last_name, expected max 60 characters',
      'cpf.min': 'min validation failed on cpf, expected min 11 characters',
      'cpf.max': 'max validation failed on cpf, expected max 11 characters',
      'email.max': 'max validation failed on email, expected max 100 characters',
      'phone.min': 'min validation failed on phone, expected min 12 characters',
      'phone.max': 'max validation failed on phone, expected max 13 characters',
      'phone_secondary.min': 'min validation failed on phone_secondary, expected min 12 characters',
      'phone_secondary.max': 'min validation failed on phone_secondary, expected max 13 characters',
      'gender.max': 'max validation failed on gender, expected max 20 characters',
      'password.min': 'min validation failed on password, expected min 8 characters',
      'password.max': 'max validation failed on password, expected max 32 characters'
    }
  }

  get sanitizationRules () {
    return {
      first_name: 'escape',
      last_name: 'escape',
      cpf: 'escape',
      email: 'normalize_email',
      phone: 'escape',
      phone_secondary: 'escape',
      gender: 'escape'
    }
  }
}

module.exports = UserUpdateUser
