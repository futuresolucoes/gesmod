'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
  companyType () {
    return this.belongsTo('App/Models/CompanyType')
  }

  addresses () {
    return this.hasMany('App/Models/Address')
  }
}

module.exports = Company
