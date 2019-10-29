'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password', 'token', 'token_created_at']
  }

  isAdmin () {
    if (this.is_admin) return true
    return false
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  company () {
    return this.hasOne('App/Models/Company')
  }

  person () {
    return this.hasOne('App/Models/Person')
  }
}

module.exports = User
