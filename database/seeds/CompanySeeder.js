'use strict'

/*
|--------------------------------------------------------------------------
| CompanySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class CompanySeeder {
  async run () {
    const now = new Date()

    const data = [
      {
        id: 1,
        name: 'Future Soluções',
        fantasy_name: 'Future',
        email: 'future@future.com.br',
        email_secondary: null,
        cnpj: '15555666000115',
        ie: null,
        im: null,
        phone: '54982656651',
        phone_secondary: null,
        user_id: null,
        company_type_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 2,
        name: 'Fonte Sarandi',
        fantasy_name: 'Sarandi',
        email: 'sarandi@hotmail.com',
        email_secondary: null,
        cnpj: '97318943000107',
        ie: null,
        im: null,
        phone: '54955112244',
        phone_secondary: null,
        user_id: null,
        company_type_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 3,
        name: 'Safeweb',
        fantasy_name: 'Safe',
        email: 'safeweb@gmail.com',
        email_secondary: null,
        cnpj: '91315554000102',
        ie: null,
        im: null,
        phone: '54940072410',
        phone_secondary: null,
        user_id: null,
        company_type_id: 1,
        created_at: now,
        updated_at: now
      }
    ]

    await Database.table('companies').insert(data)
  }
}

module.exports = CompanySeeder
