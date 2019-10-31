'use strict'

const Role = use('Role')

class RoleController {
  async index ({ request }) {
    try {
      const { search } = request.all()

      const query = Role.query()

      if (search) {
        query
          .where('name', 'LIKE', `%${search}%`)
          .orWhere('slug', 'LIKE', `%${search}%`)
          .orWhere('description', 'LIKE', `%${search}%`)
      }

      const roles = await query.paginate()

      return roles
    } catch (error) {
      throw new Error(error)
    }
  }

  async store ({ request }) {
    try {
      const dataToNewRole = request.only(['name', 'slug', 'description'])

      const newRole = await Role.create(dataToNewRole)

      return newRole
    } catch (error) {
      throw new Error(error)
    }
  }

  async show ({ params }) {
    try {
      const role = await Role.findOrFail(params.id)

      return role
    } catch (error) {
      throw new Error(error)
    }
  }

  async update ({ params, request }) {
    try {
      const dataToUpdateRole = request.only(['name', 'slug', 'description'])

      const role = await Role.findOrFail(params.id)

      role.merge(dataToUpdateRole)

      role.save()

      return role
    } catch (error) {
      throw new Error(error)
    }
  }

  async destroy ({ params }) {
    try {
      const role = await Role.findOrFail(params.id)

      role.delete()

      return role
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = RoleController
