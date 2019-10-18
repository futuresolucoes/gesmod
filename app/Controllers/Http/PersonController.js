'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Person = use('App/Models/Person')

class PersonController {
  async index ({ request, response }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response }) {
    const person = await Person.query().with('addresses').first()

    return person
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PersonController
