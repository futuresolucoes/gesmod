'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const subDays = require('date-fns/subDays')
const isAfter = require('date-fns/isAfter')
const crypto = require('crypto')

const Kue = use('Kue')
const Job = use('App/Jobs/SendEmailToForgotPassword')

const User = use('App/Models/User')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const login = request.input('login')

      const user = await User.findByOrFail('login', login)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      const infoToEmail = {
        name: user.name,
        login: user.login,
        token: user.token
      }

      Kue.dispatch(Job.key, infoToEmail, { attemps: 3 })

      return { Success: 'Sent' }
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Confirm your e-mail.' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.only(['token', 'password'])

      const user = await User.findByOrFail('token', token)

      const tokenExpired = isAfter(subDays(new Date(), 1), user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'Token invalid or expired' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Token invalid or expired' } })
    }
  }
}

module.exports = ForgotPasswordController
