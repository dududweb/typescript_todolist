const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

app.get("/", (req, res) => {
  // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({ message: "hello" });
});

app.get("/api/login", (req, res) => {
  res.send({ message: "login" });
});

const port = 8080;

var db;
MongoClient.connect(process.env.DB_URL, function (에러, client) {
  if (에러) return console.log(에러);

  db = client.db("nodes");

  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
});
