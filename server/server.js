const express = require("express");
const app = express();
const cofig = require("./config/key");
app.use(express.urlencoded({ extended: true }));

const { User } = require("./models/Users");

const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

app.get("/", (req, res) => {
  // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({ message: "hello" });
});

app.get("/api/login", (req, res) => {
  res.send({ message: "login" });
});

app.post("/register", (req, res) => {
  res.send("성공");
});

const port = 8080;

var db;
MongoClient.connect(cofig.mongoURI, function (에러, client) {
  if (에러) return console.log(에러);

  db = client.db("nodes");

  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
});
