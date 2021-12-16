import { getRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import md5 from 'crypto-js/md5'

import AppError from '@shared/errors/AppError'
import User from '@entity/User'
import authConfig from '@config/auth'

import { UserSignIn } from './dtos/user.signin.dtos'
import { UserSignUp } from './dtos/user.signup.dtos'

class UserService {
  async signIn(user: UserSignIn) {
    const repository = getRepository(User)
    const { email, password } = user
    const passwordHash = md5(password).toString()
    const userExists = await repository.findOne({
      where: { email, password: passwordHash }
    })

    if (!userExists) {
      throw new AppError('User not found', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign(
      {
        firstName: userExists.firstName,
        lastName: userExists.lastName,
        accountNumber: userExists.accountNumber,
        accountDigit: userExists.accountDigit,
        wallet: userExists.wallet
      },
      secret,
      {
        subject: userExists.id,
        expiresIn
      }
    )

    // @ts-expect-error ignora
    delete userExists.password

    return { accessToken: token }
  }

  async signUp(user: UserSignUp) {
    const userRepository = getRepository(User)
    const { email } = user
    const userExists = await userRepository.findOne({
      where: { email }
    })

    if (userExists) {
      throw new AppError('User already exists', 401)
    }

    const userData = {
      ...user,
      password: md5(user.password).toString(),
      wallet: 0,
      accountNumber: Math.floor(Math.random() * 999999),
      accountDigit: Math.floor(Math.random() * 99)
    }

    const userCreate = await userRepository.save(userData)

    const { secret, expiresIn } = authConfig.jwt

    const token = sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        accountNumber: userData.accountNumber,
        accountDigit: userData.accountDigit,
        wallet: userData.wallet
      },
      secret,
      {
        subject: userCreate.id,
        expiresIn
      }
    )

    return { accessToken: token }
  }
}

export default UserService
