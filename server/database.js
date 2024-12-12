const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Paikenepostgres1",
    database: "homework4",
    host: "localhost",
    port: "5433"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
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
	    "body" VARCHAR(200) NOT NULL,
    );`;

    execute(createUserTblQuery, createPostTblQuery).then(result => {
        if (result) {
            console.log('If either does not exist, table "users" and table "posts" are created');
        }
    });

module.exports = pool;
