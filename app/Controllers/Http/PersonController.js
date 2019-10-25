'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Person = use('App/Models/Person')

class PersonController {
  async index ({ request, response }) {

  }

  async store ({ request, response }) {
    const all = request.all()

    return all
  }

  async show ({ params, request, response }) {
    const person = await Person.query().with('isResponsable').first()

    return person
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PersonController
