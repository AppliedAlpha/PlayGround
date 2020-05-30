var express = require('express');
var User = require("../models/user");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render("index.html");
});

router.get("/signup", function(req, res, next) {
  res.render("signup.html");
});

router.post("/signup", function(req, res, next) {
  console.log("req.body:", req.body);

  // 이미 등록된 사용자인지 체크
  User.findOne({ id: req.body.id }, function(err, result) {
    if (result) {
      res.json({ code: 500, message: "이미 등록된 아이디입니다." });
    } else {
      // 사용자 등록
      var user = new User(req.body);
      user.save(function(err, result) {
        if (err) {
          res.json({ code: 500, message: "등록 실패" });
        } else {
          res.render("login.html");
        }
      });
    }
  });
});

router.get("/login", function(req, res, next) {
  res.render("login.html");
});

router.post("/login", function(req, res, next) {
  var id = req.body.id;
  var pwd = req.body.pwd;

  User.findOne({ id: id, pwd: pwd }, function(err, result) {
    if (result) {
      // 세션이 있는지 체크한 후 세션 저장
      if (!req.session.user) {
        req.session.user = {
          id: id,
          name: result.name,
          authorized: true
        };
      }
      res.redirect("/movie");
    } else {
      var message = {
        code: 404,
        message: "사용자 정보가 없습니다."
      };
      res.json(message);
    }
  });
});

router.get("/logout", function(req, res, next) {
  if (req.session.user) {
    req.session.destroy(function(err) {
      if (err) {
        throw err;
      }
    });
  }
  res.render("login.html");
});

module.exports = router;
