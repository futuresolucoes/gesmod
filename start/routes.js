'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User/StoreUser')

Route.post('sessions', 'SessionController.store')

Route.post('forgotpassword', 'ForgotPasswordController.store').validator('ForgotPassword/Store')
Route.put('resetpassword', 'ForgotPasswordController.update').validator('ForgotPassword/Update')

Route.post('sendmailtoconfirm', 'ConfirmEmailController.store').validator('ConfirmEmail/Store')
Route.put('confirmmail', 'ConfirmEmailController.update').validator('ConfirmEmail/Update')

Route.put('users', 'UserController.update').middleware(['auth']).validator('User/UpdateUser')

Route.get('person', 'PersonController.index')
Route.get('person/:id/', 'PersonController.show')
Route.post('person', 'PersonController.store')

Route.get('companypersonresponsable', 'CompanyPersonResponsableController.index')
