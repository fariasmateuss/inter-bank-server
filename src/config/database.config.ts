import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

const isDevelopment = process.env.NODE_ENV === 'development'

export default {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: Number(process.env.PG_PORT) || 3306,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  migrations: [join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}')],
  entities: [join(__dirname, '..', 'entity', '**/*{.ts,.js}')],
  cli: {
    migrationsDir: join('src', 'database', 'migrations')
  },
  synchronize: isDevelopment,
  logging: isDevelopment
} as ConnectionOptions
