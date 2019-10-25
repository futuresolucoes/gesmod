'use strict'

const User = exports = module.exports = {}

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
const Mail = use('Mail')

User.confirmMail = async ({ name, login, token }) => {
  await Mail.send(
    ['mails.confirm_new_user', 'mails.confirm_new_user-text'],
    { name, login, token, link: `${Env.get('URL_FRONT')}confirm?token=${token}` },
    message => {
      message
        .to(login)
        .from('noreply@futuresolucoes.com.br', 'Equipe Future Soluções')
        .subject('Confirm your registration')
    }
  )
}
