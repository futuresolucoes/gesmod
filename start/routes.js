'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User/StoreUser')

Route.post('sessions', 'SessionController.store')

Route.post('forgotpassword', 'ForgotPasswordController.store')
Route.put('resetpassword', 'ForgotPasswordController.update')

Route.post('sendmailtoconfirm', 'ConfirmEmailController.store').validator('ConfirmEmail/Store')
Route.put('confirmmail', 'ConfirmEmailController.update').validator('ConfirmEmail/Update')

Route.put('users', 'UserController.update').middleware(['auth']).validator('User/UpdateUser')

Route.get('person', 'PersonController.show')
Route.post('person', 'PersonController.store')

Route.get('companypersonresponsable', 'CompanyPersonResponsableController.index')
