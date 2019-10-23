const crypto = require('crypto')
const Database = use('Database')
const CustomException = use('App/Exceptions/CustomException')
const Event = use('Event')

const Company = use('App/Models/Company')
const Person = use('App/Models/Person')
const User = use('App/Models/User')

class StoreUserService {
  async run ({ company_id: companyId, person_id: personId, name, ...user }) {
    const trx = await Database.beginTransaction()

    if (companyId && personId) {
      throw new CustomException({ message: "Shouldn't be passed together person_id and company_id", validation: 'Only name, only person_id or only company_id' }, 400)
    }

    if ((personId || companyId) && name) {
      throw new CustomException({ message: "When passed person_id or company_id, name shouldn't passed", validation: 'Only name, only person_id or only company_id' }, 400)
    }

    const newUser = await User.create(user, trx)

    if (personId) {
      const person = await Person.findOrFail(personId)

      await person.user().associate(newUser, trx)

      await trx.commit()

      return newUser
    }

    if (companyId) {
      const company = await Company.findOrFail(companyId)

      await company.user().associate(newUser, trx)

      await trx.commit()

      return newUser
    }

    if (!personId && !companyId) {
      newUser.is_active = 0
      newUser.token = crypto.randomBytes(10).toString('hex')
      newUser.token_created_at = new Date()

      await newUser.save(trx)

      await trx.commit()

      newUser.name = name

      await Event.fire('user:confirmMail', newUser)

      return newUser
    }
  }
}

module.exports = new StoreUserService()
