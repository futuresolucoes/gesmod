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
}

module.exports = Person
