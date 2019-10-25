'use strict'

const Env = use('Env')
const Mail = use('Mail')

class SendEmailToConfirmEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SendEmailToConfirmEmail-job'
  }

  // This is where the work is done.
  async handle ({ name, login, token }) {
    console.log(`${SendEmailToConfirmEmail.key}`)

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
}

module.exports = SendEmailToConfirmEmail
