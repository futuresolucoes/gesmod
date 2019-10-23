'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      company_id: 'number|max:10',
      person_id: 'number|max:10',
      name: 'required_without_all:company_id,person_id|string|max:60',
      login: 'required|email|max:60|unique:users,login',
      password: 'required|confirmed|min:8|max:32'
    }
  }

  get messages () {
    return {
      'company_id.required_without_any': 'Must be passed company_id when not passed person_id',
      'person_id.required_without_any': 'Must be passed person_id when not passed company_id',
      'name.required_without_all': 'Must be passed when not passed company_id or person_id',
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
