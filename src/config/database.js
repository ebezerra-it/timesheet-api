module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: process.env.DEV_DB_DIALECT,
  },
  test: {
    username: process.env.HMG_DB_USERNAME,
    password: process.env.HMG_DB_PASSWORD,
    database: process.env.HMG_DB_NAME,
    host: process.env.HMG_DB_HOST,
    port: process.env.HMG_DB_PORT,
    dialect: process.env.HMG_DB_DIALECT,
  },
  production: {
    username: process.env.PRD_DB_USERNAME,
    password: process.env.PRD_DB_PASSWORD,
    database: process.env.PRD_DB_NAME,
    host: process.env.PRD_DB_HOST,
    port: process.env.PRD_DB_PORT,
    dialect: process.env.PRD_DB_DIALECT,
  },
};
