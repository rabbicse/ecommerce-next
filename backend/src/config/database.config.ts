interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

const env = process.env;

const db: DatabaseConfig = {
  host: env.MYSQL_HOST || "192.168.0.196",
  user: env.MYSQL_USER || "root",
  password: env.MYSQL_PASSWORD || "mehmet",
  database: env.MYSQL_DATABASE || "easywayh_ekart",
  port: 3306,
};

export = db;
