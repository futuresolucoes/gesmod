'use strict'

/*
|--------------------------------------------------------------------------
| PersonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class PersonSeeder {
  async run () {
    const now = new Date()

    const data = [
      {
        id: 1,
        name: 'Weliton Sernajotto',
        cpf: '01877811092',
        email: 'suporte@futuresolucoes.com.br',
        birthday: '1989-04-15',
        phone: '54992683663',
        phone_secondary: '5430455261',
        user_id: null,
        person_type_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 2,
        name: 'Cassiane Portella',
        cpf: '01577811193',
        email: 'cassi@gmail.com',
        birthday: '1987-11-18',
        phone: '54981552211',
        phone_secondary: '5433556655',
        user_id: null,
        person_type_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 3,
        name: 'Barbara Sernajotto',
        cpf: '02233565982',
        email: 'babalu@future.com',
        birthday: '2008-09-30',
        phone: '54988884444',
        phone_secondary: '5433556688',
        user_id: null,
        person_type_id: 1,
        created_at: now,
        updated_at: now
      }
    ]

    await Database.table('people').insert(data)
  }
}

module.exports = PersonSeeder
