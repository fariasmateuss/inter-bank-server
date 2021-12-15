import { Request, Response } from 'express'

export class UserController {
  async signUp(req: Request, res: Response) {
    return res.json({ message: 'SignUp' })
  }

  async signIn(req: Request, res: Response) {
    return res.json({ message: 'SignIn' })
  }
}
