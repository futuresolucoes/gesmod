'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.increments()
      table.string('name', 256).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('email', 256).notNullable()
      table.date('birthday').notNullable()
      table.string('phone').notNullable()
      table.string('phone_secondary')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.integer('person_type_id')
        .notNullable()
        .default()
        .unsigned()
        .references('id')
        .inTable('person_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema