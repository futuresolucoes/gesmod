'use strict'

const Mail = use('Mail')

class ConfirmNewUserService {
  async run ({ name, email, token, link }) {
    await Mail.send(
      ['mails.confirm_new_user', 'mails.confirm_new_user-text'],
      { name, email, token, link: `${link}?token=${token}`, color_letter: '#0909dd' },
      message => {
        message
          .to(email)
          .from('noreply@futuresolucoes.com.br', 'Equipe Future Soluções')
          .subject('Confirm your registration')
      }
    )
  }
}

module.exports = new ConfirmNewUserService()
