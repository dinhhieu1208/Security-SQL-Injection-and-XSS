import mysql from "mysql2/promise";

let db;

export const connectDb = async () => {
  try {

    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("MySQL is connected!");

  } catch (error) {

    console.log("MySQL connection error:", error);

  }
};

export { db };