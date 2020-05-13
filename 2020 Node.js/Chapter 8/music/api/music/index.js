const express = require("express");
const router = express.Router();
const ctrl = require("./music.ctrl");

// 라우팅 설정
router.get("/", ctrl.list); // 목록 조회

module.exports = router;