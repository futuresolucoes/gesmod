'use strict'

const crypto = require('crypto')
const { subDays, isAfter } = require('date-fns')

const ConfirmNewUser = use('App/Services/ConfirmNewUserService')
const User = use('App/Models/User')

class NewUserConfirmController {
  async store ({ request, response }) {
    try {
      const { email } = request.all()

      const user = await User.findByOrFail('email', email)

      if (user.is_active) {
        return response.status(400).send({ error: { message: 'User is already active' } })
      }

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await ConfirmNewUser.run({ name: user.name, email: user.email, token: user.token })
    } catch (error) {
      return response.status(400).send({ error: { message: 'Email not found' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token } = request.all()

      const user = await User.findByOrFail('token', token)

      if (user.is_active) {
        return response.status(400).send({ error: { message: 'User is already active' } })
      }

      const tokenExpired = isAfter(subDays(new Date(), 1), user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'Token expired' } })
      }

      user.token = null
      user.token_created_at = null
      user.is_active = 1

      user.save()
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Token invalid' } })
    }
  }
}

module.exports = NewUserConfirmController
