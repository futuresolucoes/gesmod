'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
  city () {
    return this.belongsTo('App/Models/City')
  }

  person () {
    return this.belongsTo('App/Models/Person')
  }

  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = Address
