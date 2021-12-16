import { NextFunction, Request, Response } from 'express'

import AppError from '@shared/errors/AppError'

function globalErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })

    return next()
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}
export default globalErrors
