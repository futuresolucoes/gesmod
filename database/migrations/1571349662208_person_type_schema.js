'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonTypeSchema extends Schema {
  up () {
    this.create('person_types', (table) => {
      table.increments()
      table.string('description', 256)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('person_types')
  }
}

module.exports = PersonTypeSchema
