'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

const StoreUserService = require('../../Services/User/StoreUserService')

class UserController {
  async store ({ request, response }) {
    try {
      const data = request.only(['company_id', 'person_id', 'login', 'password'])

      if (data.company_id && data.person_id) {
        return response.status('401')
          .send({ error: { message: "Shouldn't be passed together person_id and company_id" } })
      }

      return StoreUserService.run({
        companyId: data.company_id,
        personId: data.person_id,
        ...data
      })
    } catch (error) {
      return response.status(error.status).send({ error: { message: error } })
    }
  }

  async update ({ request, response, auth }) {
    try {
      const data = request.only(['id', 'login', 'password', 'is_active'])

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
