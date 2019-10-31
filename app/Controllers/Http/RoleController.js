'use strict'
const Database = use('Database')
const Role = use('Role')

class RoleController {
  async index ({ request }) {
    try {
      const { search } = request.all()

      const query = Role.query().with('permissions')

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
    const trx = await Database.beginTransaction()
    try {
      const { permissions, ...dataToNewRole } = request
        .only(['name', 'slug', 'description', 'permissions'])

      const newRole = await Role.create(dataToNewRole, trx)

      if (permissions) {
        await newRole.permissions().attach(permissions, null, trx)
      }

      await trx.commit()

      await newRole.load('permissions')

      return newRole
    } catch (error) {
      await trx.rollback()
      throw new Error(error)
    }
  }

  async show ({ params }) {
    try {
      const role = await Role.findOrFail(params.id)

      await role.load('permissions')

      return role
    } catch (error) {
      throw new Error(error)
    }
  }

  async update ({ params, request }) {
    const trx = await Database.beginTransaction()
    try {
      const { permissions, ...dataToUpdateRole } = request
        .only(['name', 'slug', 'description', 'permissions'])

      const role = await Role.findOrFail(params.id)

      role.merge(dataToUpdateRole)

      await role.save(trx)

      if (permissions) {
        await role.permissions().sync(permissions, trx)
      }

      await trx.commit()

      await role.load('permissions')

      return role
    } catch (error) {
      await trx.rollback()
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
