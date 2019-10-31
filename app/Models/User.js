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

  emailIsConfirmed () {
    if (this.email_is_confirmed) return true
    return false
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  getFullName () {
    return `${this.firstname} ${this.lastname}`
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  company () {
    return this.hasOne('App/Models/Company')
  }

  isResponsable () {
    return this.belongsToMany('App/Models/Company')
      .pivotTable('company_user_responsables')
  }
}

module.exports = User
