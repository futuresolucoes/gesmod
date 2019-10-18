'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Person extends Model {
  personType () {
    return this.belongsTo('App/Models/PersonType')
  }

  addresses () {
    return this.hasMany('App/Models/Address')
  }

  isResponsable () {
    return this.belongsToMany('App/Models/Company')
      .pivotTable('company_person_responsables')
  }
}

module.exports = Person
