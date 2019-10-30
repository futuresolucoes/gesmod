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
  async handle ({ first_name: firstName, last_name: lastName, email, token }) {
    console.log(`${SendEmailToConfirmEmail.key}`)

    const name = `${firstName} ${lastName}`

    await Mail.send(
      ['mails.confirm_new_user', 'mails.confirm_new_user-text'],
      { name, email, token, link: `${Env.get('URL_FRONT')}confirm?token=${token}` },
      message => {
        message
          .to(email)
          .from('noreply@futuresolucoes.com.br', 'Equipe Future Soluções')
          .subject('Confirm your registration')
      }
    )
  }
}

module.exports = SendEmailToConfirmEmail
