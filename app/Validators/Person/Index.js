'use strict'

class PersonIndex {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      person_type_id: 'integer|max:2',
      search: 'string|max:60'
    }
  }

  get messages () {
    return {
      'person_type_id.max': 'min validation failed on person_type_id, expected max 2 number',
      'search.max': 'min validation failed on search, expected max 60 characters'
    }
  }

  get sanitizationRules () {
    return {
      search: 'escape'
    }
  }
}

module.exports = PersonIndex
