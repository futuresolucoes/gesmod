'use strict'

class RoleAndPermissionUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string|min:3|max:40',
      slug: 'string|min:3|max:40',
      description: 'string|min:3|max:40'
    }
  }

  get messages () {
    return {
      'name.min': 'min validation failed on name, expected min 3 characters',
      'name.max': 'max validation failed on name, expected max 40 characters',
      'slug.min': 'min validation failed on slug, expected min 3 characters',
      'slug.max': 'max validation failed on slug, expected max 40 characters',
      'description.min': 'min validation failed on description, expected min 3 characters',
      'description.max': 'max validation failed on description, expected max 40 characters'
    }
  }

  get sanitizationRules () {
    return {
      name: 'escape',
      slug: 'escape',
      description: 'escape'
    }
  }
}

module.exports = RoleAndPermissionUpdate
