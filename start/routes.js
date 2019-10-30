'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.post('forgotpassword', 'ForgotPasswordController.store').validator('ForgotPassword/Store')
Route.put('resetpassword', 'ForgotPasswordController.update').validator('ForgotPassword/Update')

Route.post('sendmailtoconfirm', 'ConfirmEmailController.store').validator('ConfirmEmail/Store')
Route.put('confirmmail', 'ConfirmEmailController.update').validator('ConfirmEmail/Update')

Route.get('users', 'UserController.index').validator('User/IndexUser')
Route.post('users', 'UserController.store').validator('User/StoreUser')
Route.get('user/:id', 'UserController.show')
Route.put('user/:id', 'UserController.update').validator('User/UpdateUser')
Route.delete('user/:id', 'UserController.destroy')
