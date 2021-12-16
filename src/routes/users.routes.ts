import { Router } from 'express'

import UserController from '@resources/users/user.controller'
import userAuthentication from '@middlewares/userAuthentication'

const userRouter = Router()
const userController = new UserController()

userRouter.post('/signin', userController.signIn)
userRouter.post('/signup', userController.signUp)
userRouter.get('/me', userAuthentication, userController.me)

export default userRouter
