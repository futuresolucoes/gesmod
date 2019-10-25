'use strict'

const crypto = require('crypto')
const { subDays, isAfter } = require('date-fns')

const Kue = use('Kue')
const Job = use('App/Jobs/SendEmailToConfirmEmail')

const User = use('App/Models/User')

class ConfirmEmailController {
  async store ({ request, response }) {
    try {
      const { login } = request.all()

      const user = await User.findByOrFail('login', login)

      if (user.is_active) {
        return response.status(400).send({ error: { message: 'User is already active' } })
      }

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      const infoToEmail = {
        name: user.name,
        login: user.login,
        token: user.token
      }

      Kue.dispatch(Job.key, infoToEmail, { attemps: 3 })

      return response.status(200).send({ Success: { message: 'E-mail sent' } })
    } catch (error) {
      return response.status(400).send({ error: { message: 'Login not found' } })
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

      return { message: 'Actived' }
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Token invalid' } })
    }
  }
}

module.exports = ConfirmEmailController
