const crypto = require('crypto')
const Database = use('Database')
const CustomException = use('App/Exceptions/CustomException')

const Company = use('App/Models/Company')
const Person = use('App/Models/Person')
const User = use('App/Models/User')

class StoreUserService {
  async run ({ companyId, personId, ...user }) {
    const trx = await Database.beginTransaction()

    try {
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      const newUser = await User.create({ login: user.login, password: user.password }, trx)

      if (personId) {
        const person = await Person.findOrFail(personId)

        await person.user().associatee(newUser, trx)

        await trx.commit()

        return newUser
      }

      if (companyId) {
        const company = await Company.findOrFail(companyId)

        await company.user().associatee(newUser, trx)

        await trx.commit()

        return newUser
      }
    } catch (error) {
      await trx.rollback()
      throw new CustomException(error.message, '', error.status)
    }
  }
}

module.exports = new StoreUserService()
