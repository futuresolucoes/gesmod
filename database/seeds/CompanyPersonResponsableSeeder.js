'use strict'

/*
|--------------------------------------------------------------------------
| CompanyPersonResponsableSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class CompanyPersonResponsableSeeder {
  async run () {
    const now = new Date()

    const people = [
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

    const companies = [
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

    const responsables = [
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

    await Database.table('people').insert(people)

    await Database.table('companies').insert(companies)

    await Database.table('company_person_responsables').insert(responsables)
  }
}

module.exports = CompanyPersonResponsableSeeder
