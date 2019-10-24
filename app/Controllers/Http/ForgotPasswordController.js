'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const subDays = require('date-fns/subDays')
const isAfter = require('date-fns/isAfter')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')
const Env = use('Env')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const { login, name } = request.only(['login', 'name'])

      const user = await User.findByOrFail('login', login)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      const url = Env.get('URL_FRONT')

      await Mail.send(
        ['mails.forgot_password', 'mails.forgot_password-text'],
        {
          name: name || login,
          token: user.token,
          link: url,
          link_with_token: `${url}forgotpassword?token=${user.token}`
        },
        message => {
          message
            .to(user.login)
            .from('noreply@futuresolucoes.com.br', 'Equipe Future Soluções')
            .subject('Recovery password')
        }
      )
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
