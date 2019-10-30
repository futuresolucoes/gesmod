'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
  companyType () {
    return this.belongsTo('App/Models/CompanyType')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  responsibleFor () {
    return this.belongsToMany('App/Models/User')
      .pivotTable('company_user_responsables')
  }
}

module.exports = Company
