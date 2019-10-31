'use strict'

class RoleAndPermissionIndex {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      search: 'string|max:40'
    }
  }

  get messages () {
    return {
      'search.max': 'max validation failed on search, expected max 40 characters'
    }
  }

  get sanitizationRules () {
    return {
      search: 'escape'
    }
  }
}

module.exports = RoleAndPermissionIndex
