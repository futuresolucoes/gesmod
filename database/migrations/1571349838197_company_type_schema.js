'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanyTypeSchema extends Schema {
  up () {
    this.create('company_types', (table) => {
      table.increments()
      table.string('description', 256).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('company_types')
  }
}

module.exports = CompanyTypeSchema
