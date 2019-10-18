'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('name', 256).notNullable()
      table.string('fantasy_name', 256).notNullable()
      table.string('email', 256).notNullable()
      table.string('email_secondary', 256)
      table.string('cnpj', 14).notNullable().unique()
      table.string('ie', 10).unique()
      table.string('im', 10).unique()
      table.string('phone').notNullable()
      table.string('phone_secondary')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.integer('company_type_id')
        .notNullable()
        .default()
        .unsigned()
        .references('id')
        .inTable('company_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
