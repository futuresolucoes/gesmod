'use strict'

const crypto = require('crypto')

const Event = use('Event')
const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.only(['name', 'email', 'password'])

      data.token = crypto.randomBytes(10).toString('hex')
      data.token_created_at = new Date()

      const newUser = await User.create(data)

      Event.fire('user', newUser)

      return newUser
    } catch (error) {
      return response.status(error.status).send({ error: { message: error.message } })
    }
  }

  async update ({ request, response, auth }) {
    try {
      const data = request.only(['id', 'name', 'email', 'password', 'is_active'])

      const user = await User.findByOrFail('id', data.id)

      const { id: authUserId } = await auth.getUser()

      if (user.id !== authUserId) {
        return response.status(401).send({ error: { message: 'You do not have permission to change this user' } })
      }

      user.merge(data)

      await user.save()

      return user
    } catch (error) {
      return response.status(400).send({ error: { message: 'Confirm your data' } })
    }
  }
}

module.exports = UserController
