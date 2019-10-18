'use strict'

/*
|--------------------------------------------------------------------------
| CompanyPersonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class CompanyPersonSeeder {
  async run () {
    const now = new Date()

    const data = [
      {
        id: 1,
        company_id: 1,
        person_id: 2,
        created_at: now,
        updated_at: now
      },
      {
        id: 2,
        company_id: 1,
        person_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 3,
        company_id: 2,
        person_id: 3,
        created_at: now,
        updated_at: now
      },
      {
        id: 4,
        company_id: 3,
        person_id: 1,
        created_at: now,
        updated_at: now
      }
    ]

    await Database.table('company_person_responsables').insert(data)
  }
}

module.exports = CompanyPersonSeeder
