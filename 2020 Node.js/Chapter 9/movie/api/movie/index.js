const express = require("express");
const router = express.Router();
const ctrl = require("./movie.ctrl");

// 라우팅 설정
router.get("/", ctrl.list); // 목록 조회
router.get("/:id", ctrl.detail); // 상세 조회
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;