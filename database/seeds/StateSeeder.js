'use strict'

/*
|--------------------------------------------------------------------------
| StateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class StateSeeder {
  async run () {
    const now = new Date()

    const states = [
      {
        id: 11,
        name: 'Rondônia',
        initials: 'RO',
        created_at: now,
        updated_at: now
      },
      {
        id: 12,
        name: 'Acre',
        initials: 'AC',
        created_at: now,
        updated_at: now
      },
      {
        id: 13,
        name: 'Amazonas',
        initials: 'AM',
        created_at: now,
        updated_at: now
      },
      {
        id: 14,
        name: 'Roraima',
        initials: 'RR',
        created_at: now,
        updated_at: now
      },
      {
        id: 15,
        name: 'Pará',
        initials: 'PA',
        created_at: now,
        updated_at: now
      },
      {
        id: 16,
        name: 'Amapá',
        initials: 'AP',
        created_at: now,
        updated_at: now
      },
      {
        id: 17,
        name: 'Tocantins',
        initials: 'TO',
        created_at: now,
        updated_at: now
      },
      {
        id: 21,
        name: 'Maranhão',
        initials: 'MA',
        created_at: now,
        updated_at: now
      },
      {
        id: 22,
        name: 'Piauí',
        initials: 'PI',
        created_at: now,
        updated_at: now
      },
      {
        id: 23,
        name: 'Ceará',
        initials: 'CE',
        created_at: now,
        updated_at: now
      },
      {
        id: 24,
        name: 'Rio Grande do Norte',
        initials: 'RN',
        created_at: now,
        updated_at: now
      },
      {
        id: 25,
        name: 'Paraíba',
        initials: 'PB',
        created_at: now,
        updated_at: now
      },
      {
        id: 26,
        name: 'Pernambuco',
        initials: 'PE',
        created_at: now,
        updated_at: now
      },
      {
        id: 27,
        name: 'Alagoas',
        initials: 'AL',
        created_at: now,
        updated_at: now
      },
      {
        id: 28,
        name: 'Sergipe',
        initials: 'SE',
        created_at: now,
        updated_at: now
      },
      {
        id: 29,
        name: 'Bahia',
        initials: 'BA',
        created_at: now,
        updated_at: now
      },
      {
        id: 31,
        name: 'Minas Gerais',
        initials: 'MG',
        created_at: now,
        updated_at: now
      },
      {
        id: 32,
        name: 'Espírito Santo',
        initials: 'ES',
        created_at: now,
        updated_at: now
      },
      {
        id: 33,
        name: 'Rio de Janeiro',
        initials: 'RJ',
        created_at: now,
        updated_at: now
      },
      {
        id: 35,
        name: 'São Paulo',
        initials: 'SP',
        created_at: now,
        updated_at: now
      },
      {
        id: 41,
        name: 'Paraná',
        initials: 'PR',
        created_at: now,
        updated_at: now
      },
      {
        id: 42,
        name: 'Santa Catarina',
        initials: 'SC',
        created_at: now,
        updated_at: now
      },
      {
        id: 43,
        name: 'Rio Grande do Sul',
        initials: 'RS',
        created_at: now,
        updated_at: now
      },
      {
        id: 50,
        name: 'Mato Grosso do Sul',
        initials: 'MS',
        created_at: now,
        updated_at: now
      },
      {
        id: 51,
        name: 'Mato Grosso',
        initials: 'MT',
        created_at: now,
        updated_at: now
      },
      {
        id: 52,
        name: 'Goiás',
        initials: 'GO',
        created_at: now,
        updated_at: now
      },
      {
        id: 53,
        name: 'Distrito Federal',
        initials: 'DF',
        created_at: now,
        updated_at: now
      }
    ]

    await Database.table('states').insert(states)
  }
}

module.exports = StateSeeder
