import mysql from 'mysql2/promise';
import dbConfig from '../config/database.config';

async function query(sql: string, params: any[]) {
  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

export = {
  query
};
