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
const Hash = use('Hash')

class CompanyUserResponsableSeeder {
  async run () {
    const now = new Date()

    const users = [
      {
        first_name: 'Pedro',
        last_name: 'Paulo',
        email: 'pedro_paulo@gmail.com.br',
        cpf: '02271598220',
        birthday: '1985-04-10',
        phone: '54992683665',
        phone_secondary: '54304555544',
        gender: 'M',
        password: await Hash.make('12345678'),
        created_at: now,
        updated_at: now
      },
      {
        first_name: 'Jerferson',
        last_name: 'Querb',
        email: 'jeferson_querb@gmail.com.br',
        cpf: '02271598333',
        birthday: '1989-08-01',
        phone: '54992683665',
        phone_secondary: '54304555544',
        gender: 'M',
        password: await Hash.make('12345678'),
        created_at: now,
        updated_at: now
      },
      {
        first_name: 'Beatriz',
        last_name: 'Querb',
        email: 'beatriz_querb@gmail.com.br',
        cpf: '02271585987',
        birthday: '1999-01-05',
        phone: '54991554477',
        phone_secondary: '54304551524',
        gender: 'M',
        password: await Hash.make('12345678'),
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
        user_id: 2,
        created_at: now,
        updated_at: now
      },
      {
        id: 2,
        company_id: 1,
        user_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        id: 3,
        company_id: 2,
        user_id: 3,
        created_at: now,
        updated_at: now
      },
      {
        id: 4,
        company_id: 3,
        user_id: 1,
        created_at: now,
        updated_at: now
      }
    ]

    await Database.table('users').insert(users)

    await Database.table('companies').insert(companies)

    await Database.table('company_user_responsables').insert(responsables)
  }
}

module.exports = CompanyUserResponsableSeeder
