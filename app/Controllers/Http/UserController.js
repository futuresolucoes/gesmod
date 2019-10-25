'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const crypto = require('crypto')

const Kue = use('Kue')
const Job = use('App/Jobs/SendEmailToConfirmEmail')

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'login', 'password'])

      data.token = crypto.randomBytes(10).toString('hex')
      data.token_created_at = new Date()

      const { id, name, login } = await User.create(data)

      Kue.dispatch(Job.key, data, { attemps: 3 })

      return { id, name, login }
    } catch (error) {
      return response.status(error.status).send({ error: { message: error } })
    }
  }

  async update ({ request, response, auth }) {
    try {
      const data = request.only(['id', 'name', 'login', 'password', 'is_active'])

      const user = await User.findByOrFail('id', data.id)

      const { id: authUserId } = await auth.getUser()

      if (user.id !== authUserId) {
        return response.status(401).send({ error: { message: 'You do not have permission to change this user' } })
      }

      user.merge(data)

      await user.save()

      return user
    } catch (error) {
      return response.status(error.status).send({ error: { message: error.message } })
    }
  }
}

module.exports = UserController
