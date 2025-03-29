require("dotenv").config();

module.exports = {
  storage:
    process.env.DB_STORAGE || "../backend-laravel/database/database.sqlite",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
