import { Router } from 'express'

import { UserController } from '@resources/users/user.controller'

const usersRouter = Router()
const userController = new UserController()

usersRouter.post('/signin', userController.signIn)

usersRouter.post('/signup', userController.signUp)

export default usersRouter
