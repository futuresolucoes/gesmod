'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User/StoreUser')
Route.post('sessions', 'SessionController.store')
Route.post('forgotpassword', 'ForgotPasswordController.store')
Route.put('resetpassword', 'ForgotPasswordController.update')
Route.post('sendmailconfirmregister', 'NewUserConfirmController.store')
Route.put('confirmregister', 'NewUserConfirmController.update')

Route.put('users', 'UserController.update').middleware(['auth']).validator('User/UpdateUser')

Route.get('person', 'PersonController.show')
Route.post('person', 'PersonController.store')

Route.get('companypersonresponsable', 'CompanyPersonResponsableController.index')
