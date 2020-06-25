import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export async function connect () {
  const connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
  })
  return connection
}
