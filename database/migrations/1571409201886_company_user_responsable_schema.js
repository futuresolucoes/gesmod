'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanyUserResponsableSchema extends Schema {
  up () {
    this.create('company_user_responsables', (table) => {
      table.increments()
      table.integer('company_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.unique(['company_id', 'user_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('company_user_responsables')
  }
}

module.exports = CompanyUserResponsableSchema
