import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

let { HOST, USER, PASS, DATABASE } = process.env;

export const db = mysql.createConnection({

    host: HOST,
    user: USER,
    password: PASS,
    database: DATABASE,

})
