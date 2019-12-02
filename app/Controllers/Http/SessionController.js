'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.query()
        .where('email', email)
        .first()

      if (user && !user.emailIsConfirmed()) {
        return response.status(401).send({ error: { Message: 'Need this user confirm email' } })
      }

      const token = await auth.attempt(email, password)

      return response.status(200).send({ token: token.token, user })
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SessionController
