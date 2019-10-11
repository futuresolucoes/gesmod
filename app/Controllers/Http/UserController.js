'use strict'

const crypto = require('crypto')

const ConfirmNewUser = use('App/Services/ConfirmNewUserService')
const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'fantasy_name', 'email', 'password'])

      const user = await User.findBy('email', data.email)

      if (user) {
        return response.status(400).send({ error: { message: 'E-mail already registered' } })
      }

      data.token = crypto.randomBytes(10).toString('hex')
      data.token_created_at = new Date()

      const newUser = await User.create(data)

      await ConfirmNewUser.run({ name: data.name, email: data.email, token: data.token })

      return newUser
    } catch (error) {
      return response.status(400).send({ error: { message: error.message } })
    }
  }
}

module.exports = UserController
