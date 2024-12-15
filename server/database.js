const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "asdfjk", // Enter your password here
    database: "homework4", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});

const execute = async(query1, query2) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        await pool.query(query2); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};


const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id SERIAL PRIMARY KEY,
        "date" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL
    );`;

execute(createUserTblQuery, createPostTblQuery).then(result => {
    if (result) {
        console.log('If either does not exist, table "users" and table "posts" are created');
    }
});

module.exports = pool;
