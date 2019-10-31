'use strict'

const Permission = use('Permission')

class PermissionController {
  async index ({ request }) {
    try {
      const { search } = request.all()

      const query = Permission.query()

      if (search) {
        query
          .where('name', 'LIKE', `%${search}%`)
          .orWhere('slug', 'LIKE', `%${search}%`)
          .orWhere('description', 'LIKE', `%${search}%`)
      }

      const permissions = await query.paginate()

      return permissions
    } catch (error) {
      throw new Error(error)
    }
  }

  async store ({ request }) {
    try {
      const data = request.only(['name', 'slug', 'description'])

      const permission = await Permission.create(data)

      return permission
    } catch (error) {
      throw new Error(error)
    }
  }

  async show ({ params }) {
    try {
      const permission = await Permission.findOrFail(params.id)

      return permission
    } catch (error) {
      throw new Error(error)
    }
  }

  async update ({ request, params }) {
    try {
      const data = request.only(['name', 'slug', 'description'])

      const permission = await Permission.findOrFail(params.id)

      permission.merge(data)

      permission.save()

      return permission
    } catch (error) {
      throw new Error(error)
    }
  }

  async destroy ({ params }) {
    try {
      const permission = await Permission.findOrFail(params.id)

      permission.delete()

      return permission
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = PermissionController
