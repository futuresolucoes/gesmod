'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanyPersonResponsableSchema extends Schema {
  up () {
    this.create('company_person_responsables', (table) => {
      table.increments()
      table.integer('company_id').notNullable().unsigned().references('id').inTable('companies')
      table.integer('person_id').notNullable().unsigned().references('id').inTable('people')
      table.unique(['company_id', 'person_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('company_person_responsables')
  }
}

module.exports = CompanyPersonResponsableSchema
