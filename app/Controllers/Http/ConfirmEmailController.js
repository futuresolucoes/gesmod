'use strict'

const crypto = require('crypto')
const { subDays, isAfter } = require('date-fns')

const Kue = use('Kue')
const Job = use('App/Jobs/SendEmailToConfirmEmail')

const User = use('App/Models/User')

class ConfirmEmailController {
  async store ({ request, response }) {
    try {
      const { email } = request.all()

      const user = await User.findBy('email', email)

      if (!user) {
        return response.status(400).send({ error: { message: "User don't exist" } })
      }

      if (user.emailIsConfirmed()) {
        return response.status(400).send({ error: { message: 'Email already confirmed' } })
      }

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      const infoToEmail = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: user.token
      }

      Kue.dispatch(Job.key, infoToEmail, { attemps: 3 })

      return response.status(200).send({ Success: { message: 'E-mail sent' } })
    } catch (error) {
      throw new Error(error)
    }
  }

  async update ({ request, response }) {
    try {
      const { token } = request.all()

      const user = await User.findByOrFail('token', token)

      if (user.email_is_confirmed) {
        return response.status(400).send({ error: { message: 'Email is already confirmed' } })
      }

      const tokenExpired = isAfter(subDays(new Date(), 1), user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'Token expired' } })
      }

      user.token = null
      user.token_created_at = null
      user.email_is_confirmed = 1

      user.save()

      return response.status(200).send({ Success: { message: 'E-mail confirmed' } })
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = ConfirmEmailController
