'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const { login, password } = request.all()

      const user = await User.query()
        .where('login', login)
        .first()

      if (user && !user.is_active) {
        return response.status(401).send({ error: { Message: 'This user is inactive' } })
      }

      const token = await auth.attempt(login, password)

      return token
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Login or password are wrong' } })
    }
  }
}

module.exports = SessionController
