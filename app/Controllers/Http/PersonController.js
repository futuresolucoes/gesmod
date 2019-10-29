'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Person = use('App/Models/Person')

class PersonController {
  async index ({ request, response }) {
    try {
      const { search, person_type_id: personTypeId } = request.all()

      const query = Person.query()

      if (personTypeId) {
        query.where('person_type_id', personTypeId)
      }

      if (search) {
        query.where(function () {
          this
            .where('name', 'LIKE', `%${search}%`)
            .orWhere('cpf', 'LIKE', `%${search}`)
            .orWhere('email', 'LIKE', `%${search}%`)
            .orWhere('phone', 'LIKE', `%${search}%`)
            .orWhere('phone_secondary', 'LIKE', `%${search}%`)
        })
      }

      const people = await query.fetch()

      return people
    } catch (error) {
      throw new Error(error)
    }
  }

  async store ({ request, response }) {
    try {
      const dataToNewPerson = request
        .only([
          'name',
          'cpf',
          'email',
          'birthday',
          'phone',
          'phone_secondary',
          'gender',
          'user_id',
          'person_type_id'
        ])

      const newPerson = await Person.create(dataToNewPerson)

      return newPerson
    } catch (error) {
      throw new Error(error)
    }
  }

  async show ({ params, request, response }) {
    try {
      const { id } = params

      const person = await Person.findOrFail(id)

      return person
    } catch (error) {
      return response.status(error.status).send({ error: { message: "Person doesn't exist" } })
    }
  }

  async update ({ params, request, response, auth }) {
    try {
      const { id } = params

      const dataToUpdatePerson = request.only([
        'name',
        'cpf',
        'email',
        'birthday',
        'phone',
        'phone_secondary',
        'gender',
        'person_type_id'
      ])

      const person = await Person.findOrFail(id)

      const userAuth = await auth.getUser()

      if (person.user_id !== userAuth.id && !userAuth.isAdmin()) {
        return response.status(401).send({ Error: { message: "You doesn't have permission about this person" } })
      }

      person.merge(dataToUpdatePerson)

      person.save()

      return person
    } catch (error) {
      throw new Error(error)
    }
  }

  async destroy ({ params, request, response }) {

  }
}

module.exports = PersonController
