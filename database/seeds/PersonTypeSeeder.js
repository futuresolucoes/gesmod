'use strict'

/*
|--------------------------------------------------------------------------
| PersonTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class PersonTypeSeeder {
  async run () {
    const now = new Date()

    const personTypes = [
      {
        description: 'Colaborador',
        created_at: now,
        updated_at: now
      },
      {
        description: 'Contador',
        created_at: now,
        updated_at: now
      },
      {
        description: 'Responsável',
        created_at: now,
        updated_at: now
      },
      {
        description: 'Contato',
        created_at: now,
        updated_at: now
      }
    ]
    await Database.table('person_types').insert(personTypes)
  }
}

module.exports = PersonTypeSeeder
