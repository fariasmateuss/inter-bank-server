import { Request, Response } from 'express'

import UserService from './user.services'

class UserController {
  async signUp(request: Request, response: Response) {
    const userService = new UserService()
    const user = await userService.signUp(request.body)

    return response.status(201).send(user)
  }

  async signIn(request: Request, response: Response) {
    const { email, password } = request.body
    const userService = new UserService()
    const user = await userService.signIn({ email, password })

    return response.status(200).send(user)
  }

  async me(request: Request, response: Response) {
    const userService = new UserService()
    const user = await userService.me(request.user)

    return response.status(201).send(user)
  }
}

export default UserController
