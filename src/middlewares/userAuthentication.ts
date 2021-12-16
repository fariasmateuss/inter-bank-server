import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '@config/auth'
import AppError from '@shared/errors/AppError'

interface TokenPlayload {
  firstName: string
  lastName: string
  iat: number
  exp: number
  sub: string
}

function userAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('A JWT was not sent', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { sub, firstName, lastName } = decoded as TokenPlayload

    request.user = {
      id: sub,
      firstName,
      lastName
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT', 401)
  }
}

export default userAuthentication
