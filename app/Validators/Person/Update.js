'use strict'

class PersonUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string|min:3|max:60',
      cpf: 'string|min:11|max:11|unique:people,cpf',
      email: 'email|max:100',
      birthday: 'date',
      phone: 'string|min:13|max:13',
      phone_secondary: 'string|min:13|max:13',
      gender: 'string|max:20',
      person_type_id: 'integer|max:2'
    }
  }

  get messages () {
    return {
      'name.min': 'min validation failed on name, expected min 3 characters',
      'name.max': 'max validation failed on name, expected max 60 characters',
      'cpf.min': 'min validation failed on cpf, expected min 11 characters',
      'cpf.max': 'max validation failed on cpf, expected max 11 characters',
      'email.max': 'max validation failed on email, expected max 100 characters',
      'phone.min': 'min validation failed on phone, expected min 13 characters',
      'phone.max': 'max validation failed on phone, expected max 13 characters',
      'phone_secondary.min': 'min validation failed on phone_secondary, expected min 13 characters',
      'phone_secondary.max': 'min validation failed on phone_secondary, expected max 13 characters',
      'gender.max': 'max validation failed on gender, expected max 20 characters',
      'person_type_id.max': 'max validation failed on gender, expected max 2 numbers'
    }
  }

  get sanitizationRules () {
    return {
      name: 'escape',
      cpf: 'escape',
      email: 'normalize_email',
      phone: 'escape',
      phone_secondary: 'escape',
      gender: 'escape'
    }
  }
}

module.exports = PersonUpdate
