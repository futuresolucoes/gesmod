'use strict'

class IndexUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      search: 'string|max:60'
    }
  }

  get messages () {
    return {
      'search.max': 'max validation failed on search, expected max 60 characters'
    }
  }

  get sanitizationRules () {
    return {
      search: 'escape'
    }
  }
}

module.exports = IndexUser
