import databaseConfig from '@config/database.config'
import { createConnection } from 'typeorm'

createConnection(databaseConfig)
