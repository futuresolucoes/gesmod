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
      table.string('gender').notNullable()
      table.integer('user_id')
        .unsigned()
        .unique()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.integer('person_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('person_types')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema
