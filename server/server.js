const express = require("express");
const app = express();
const config = require("./config/key");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));

const { User } = require("./models/Users");

require("dotenv").config();

app.get("/", (req, res) => {
  // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({ message: "hello" });
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  console.log("user>>>", req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    console.log("userInfo.body>>>", userInfo.body);
    return res.status(200).json({ success: true });
  });
});

app.get("/api/login", (req, res) => {
  res.send({ message: "login" });
});

app.post("/api/login", (req, res) => {
  //요청된 아이디 DB에서 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "유저없음",
      });
    }
    //요청된 이메일 잇다면 비밀번호 맞는지 검사
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비번틀림요" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 저장한다. 쿠키, 로컬스토리지, 세션스토리지
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });

  //비밀번호까지 맞다면 토큰 생성
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
