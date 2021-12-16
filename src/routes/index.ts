import { Router } from 'express'

import usersRouter from './users.routes'
import pixRouter from './pix.routes'

const routes = Router()

routes.use('/user', usersRouter)
routes.use('/pix', pixRouter)

export default routes
