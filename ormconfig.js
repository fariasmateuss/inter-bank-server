module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === 'production'
      ? {
        rejectUnauthorized: false,
      }
      : false,
  entities:["src/entity/*.ts"],
  synchronize: true
}
