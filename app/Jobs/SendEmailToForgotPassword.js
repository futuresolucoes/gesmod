'use strict'

const Mail = use('Mail')
const Env = use('Env')

class SendEmailToForgotPassword {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SendEmailToForgotPassword-job'
  }

  // This is where the work is done.
  async handle ({ name, login, token }) {
    console.log('SendEmailToForgotPassword-job started')

    const url = Env.get('URL_FRONT')

    await Mail.send(
      ['mails.forgot_password', 'mails.forgot_password-text'],
      {
        name,
        token,
        link: url,
        link_with_token: `${url}forgotpassword?token=${token}`
      },
      message => {
        message
          .to(login)
          .from('noreply@futuresolucoes.com.br', 'Equipe Future Soluções')
          .subject('Recovery password')
      }
    )
  }
}

module.exports = SendEmailToForgotPassword
