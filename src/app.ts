import express, { Express } from 'express'
import cors from 'cors'

import globalErrors from './middlewares/globalErrors'
import './database'
import routes from './routes'

class App {
  public readonly app: Express

  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
    this.exceptionHandlers()
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes() {
    this.app.use(routes)
  }

  private exceptionHandlers() {
    this.app.use(globalErrors)
  }
}

export default new App().app
