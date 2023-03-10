const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const databasePath = path.join(__dirname, "todoApplication.db");
const app = express();
app.use(express.json());
let database = null;
const intialAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log("server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`db error: ${error.message}`);
    process.exit(1);
  }
};
intialAndServer();

module.exports = app;
