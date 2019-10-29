'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('login', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('is_admin').defaultTo(0)
      table.boolean('is_active').defaultTo(0)
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
