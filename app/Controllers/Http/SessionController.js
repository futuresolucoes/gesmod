'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.query()
        .where('email', email)
        .first()

      if (user && !user.is_active) {
        return response.status(401).send({ error: { Message: 'This user is inactive' } })
      }

      const token = await auth.attempt(email, password)

      return token
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Email or password are wrong' } })
    }
  }
}

module.exports = SessionController
