'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersonType extends Model {
  people () {
    return this.hasMany('App/Models/Person')
  }
}

module.exports = PersonType
