'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const crypto = require('crypto')

const Kue = use('Kue')
const Job = use('App/Jobs/SendEmailToConfirmEmail')

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    try {
      const { search } = request.all()

      const query = User.query()

      if (search) {
        query.where(function () {
          this
            .where('first_name', 'LIKE', `%${search}%`)
            .orWhere('last_name', 'LIKE', `%${search}%`)
            .orWhere('cpf', 'LIKE', `%${search}`)
            .orWhere('email', 'LIKE', `%${search}%`)
            .orWhere('phone', 'LIKE', `%${search}%`)
            .orWhere('phone_secondary', 'LIKE', `%${search}%`)
        })
      }

      const users = await query.fetch()

      return users
    } catch (error) {
      throw new Error(error)
    }
  }

  async store ({ request }) {
    try {
      const data = request.only([
        'first_name',
        'last_name',
        'email',
        'cpf',
        'birthday',
        'phone',
        'phone_secondary',
        'gender',
        'password'
      ])

      data.token = crypto.randomBytes(10).toString('hex')
      data.token_created_at = new Date()

      const newUser = await User.create(data)

      Kue.dispatch(Job.key, data, { attemps: 3 })

      return newUser
    } catch (error) {
      throw new Error(error)
    }
  }

  async show ({ params, response }) {
    try {
      const { id } = params

      const person = await User.find(id)

      if (!person) {
        return response.status(400).send({ error: { message: "User don't exist" } })
      }

      return person
    } catch (error) {
      throw new Error(error)
    }
  }

  async update ({ params, request, response, auth }) {
    try {
      const data = request.only([
        'first_name',
        'last_name',
        'email',
        'cpf',
        'birthday',
        'phone',
        'phone_secondary',
        'gender',
        'password'
      ])

      const user = await User.findByOrFail('id', params.id)

      const authUser = await auth.getUser()

      if (user.id !== authUser.id && !authUser.isAdmin()) {
        return response.status(401).send({ error: { message: 'Without permission' } })
      }

      user.merge(data)

      await user.save()

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = UserController
