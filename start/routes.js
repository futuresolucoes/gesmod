'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('forgotpassword', 'ForgotPasswordController.store')
Route.put('resetpassword', 'ForgotPasswordController.update')
Route.post('sendmailconfirmregister', 'NewUserConfirmController.store')
Route.put('confirmregister', 'NewUserConfirmController.update')
