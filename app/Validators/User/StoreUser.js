'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      company_id: 'required_without_any:person_id',
      person_id: 'required_without_any:company_id',
      login: 'required|email|unique:users,login',
      password: 'required|confirmed|min:8'
    }
  }

  get messages () {
    return {
      'company_id.required_without_any': 'Must be passed company_id when not passed person_id',
      'person_id.required_without_any': 'Must be passed person_id when not passed company_id',
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
