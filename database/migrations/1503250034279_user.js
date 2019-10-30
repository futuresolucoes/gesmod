'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('first_name', 254).notNullable()
      table.string('last_name', 254).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.date('birthday').notNullable()
      table.string('phone').notNullable()
      table.string('phone_secondary')
      table.string('gender').notNullable()
      table.string('password', 60).notNullable()
      table.boolean('is_admin').defaultTo(0)
      table.boolean('email_is_confirmed').defaultTo(0)
      table.string('token')
      table.datetime('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
