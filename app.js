const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log(req.body || req.query);
//   next();
// });

// app.post("/", (req, res, next) => {
//   fs.readFileSync(`${__dirname}/UserApi/user.json`, {
//     encoding: "utf8",
//   });

//   res.send(file);
// });

const connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: "Softsuave@123",
  database: "affitu",
});
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.body || req.headers || req.query || req.hostname);
  next();
});

app.options("*", cors());

app.get("/", async (req, res, next) => {
  connection.query(`SELECT * FROM user `, (err, result) => {
    if (err) throw err;
    console.log(result.id);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running..");
});
