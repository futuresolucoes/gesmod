'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.integer('id', 10).notNullable().unique()
      table.string('name', 255).notNullable()
      table.integer('state_id').unsigned().references('id').inTable('states')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
