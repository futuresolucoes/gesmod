'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.string('zipcode', 8).notNullable()
      table.string('street', 256).notNullable()
      table.string('number', 10).notNullable()
      table.string('complement', 50).notNullable()
      table.string('district', 50).notNullable()
      table.integer('city_id').notNullable().unsigned().references('id').inTable('cities')
      table.integer('person_id')
        .unsigned()
        .references('id')
        .inTable('people')
      table.integer('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
