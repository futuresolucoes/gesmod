'use strict'

const crypto = require('crypto')

const ConfirmNewUser = use('App/Services/ConfirmNewUserService')
const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'email', 'password'])

      data.token = crypto.randomBytes(10).toString('hex')
      data.token_created_at = new Date()

      const newUser = await User.create(data)

      await ConfirmNewUser.run({ name: data.name, email: data.email, token: data.token })

      return newUser
    } catch (error) {
      return response.status(error.status).send({ error: { message: error.message } })
    }
  }
}

module.exports = UserController
