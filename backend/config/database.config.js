const env = process.env;
const fs = require("fs");
const db = {
  host: env.DB_HOST || "192.168.0.196",
  user: env.DB_USER || "root",
  password: env.DB_PASSWORD || "mehmet",
  database: env.DB_NAME || "easywayh_ekart",
  port: env.DB_PORT || 3306
};

module.exports = db;
