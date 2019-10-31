'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.post('forgotpassword', 'ForgotPasswordController.store')
  .validator('ForgotPassword/Store')
Route.put('resetpassword', 'ForgotPasswordController.update')
  .validator('ForgotPassword/Update')

Route.post('sendmailtoconfirm', 'ConfirmEmailController.store')
  .validator('ConfirmEmail/Store')
Route.put('confirmmail', 'ConfirmEmailController.update')
  .validator('ConfirmEmail/Update')

Route.resource('users', 'UserController')
  .middleware(new Map([
    [['index', 'update', 'show', 'destroy'], ['auth']]
  ]))
  .validator(new Map([
    [['users.index'], ['User/Index']],
    [['users.store'], ['User/Store']],
    [['users.update'], ['User/Update']]
  ]))

Route.resource('roles', 'RoleController')
  .apiOnly()
  .middleware('auth')
  .validator(new Map([
    [['roles.index'], ['RoleAndPermission/Index']],
    [['roles.store'], ['RoleAndPermission/Store']],
    [['roles.update'], ['RoleAndPermission/Update']]
  ]))

Route.resource('permissions', 'PermissionController')
  .apiOnly()
  .middleware('auth')
  .validator(new Map([
    [['permissions.index'], ['RoleAndPermission/Index']],
    [['permissions.store'], ['RoleAndPermission/Store']],
    [['permissions.update'], ['RoleAndPermission/Update']]
  ]))
