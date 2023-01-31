const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
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
  database: "user",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.use((req, res, next) => {
  const check = req.body || req.query;
  console.log(check);
  if (Object.keys(check).length) {
    next();
  } else {
    res.send({ error: "send body or query " }).status(404);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  connection.query(
    `SELECT * FROM user_details WHERE email = ? and password = ?`,
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ error: err.message }).status(404);
      }
      if (result.length > 0) {
        res.send({ data: result, message: "success" }).status(200);
      } else {
        res.send({ error: "user not found" }).status(404);
      }
    }
  );
});

app.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;
  connection.query(
    `insert into user_details(email,password) values(?,?)`,
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err.message }).status(404);
      }
      res.send({ data: { email, password }, message: "user_created" });
    }
  );
});

// app.get("/", async (req, res, next) => {
//   connection.query(`SELECT * FROM user `, (err, result) => {
//     if (err) throw err;
//     console.log(result.id);
//     res.send(result);
//   });
// });
app.listen(3001, () => {
  console.log("running..");
});
