'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CompanyPersonResponsable extends Model {
  company () {
    return this.hasMany('App/Models/Company')
  }

  person () {
    return this.hasMany('App/Models/Person')
  }
}

module.exports = CompanyPersonResponsable
