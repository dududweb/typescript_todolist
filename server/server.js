const express = require("express");
const app = express();
const config = require("./config/key");

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));

const { User } = require("./models/Users");

require("dotenv").config();

app.get("/", (req, res) => {
  // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({ message: "hello" });
});

app.get("/api/login", (req, res) => {
  res.send({ message: "login" });
});

app.post("/api/register", (req, res) => {
  const user = new User({ email: "ev@@", password: "1234445" });
  console.log("user>>>", user);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ message: "success" });
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
