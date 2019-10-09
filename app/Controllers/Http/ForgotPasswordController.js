'use strict'

const subDays = require('date-fns/subDays')
const isAfter = require('date-fns/isAfter')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')

      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['mails.forgot_password', 'mails.forgot_password-text'],
        { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}` },
        message => {
          message
            .to(user.email)
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
      const { token, password } = request.all()

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
