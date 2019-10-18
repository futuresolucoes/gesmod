'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CompanyType extends Model {
  companies () {
    return this.hasMany('App/Models/Company')
  }
}

module.exports = CompanyType
