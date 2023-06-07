import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "next",
  },
});

export { db };
