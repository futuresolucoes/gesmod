'use strict'

/*
|--------------------------------------------------------------------------
| CompanyTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class CompanyTypeSeeder {
  async run () {
    const now = new Date()

    const companyTypes = [
      {
        description: 'Costumer',
        created_at: now,
        updated_at: now
      },
      {
        description: 'Partner',
        created_at: now,
        updated_at: now
      },
      {
        description: 'Prospect',
        created_at: now,
        updated_at: now
      }
    ]
    await Database.table('company_types').insert(companyTypes)
  }
}

module.exports = CompanyTypeSeeder
