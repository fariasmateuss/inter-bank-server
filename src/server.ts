import 'express-async-errors'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import './database'
import globalErrors from './middlewares/globalErrors'
import routes from './routes'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(globalErrors)

app.listen(port, () => console.log(`Server is listening on ${port}`))
