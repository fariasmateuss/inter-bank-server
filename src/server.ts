import 'express-async-errors'
import 'dotenv/config'

import app from './app'

const appPort = process.env.PORT || 3333

function bootstrap() {
  app.listen(appPort)
}

bootstrap()
