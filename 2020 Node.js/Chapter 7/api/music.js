const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("music get");
});

router.post("/", (req, res) => {
    res.send("music post");
});

router.put("/", (req, res) => {
    res.send("music put");
});

router.delete("/", (req, res) => {
    res.send("music delete");
});

module.exports = router;