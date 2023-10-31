const express = require("express");
const { getTikTok, getYoutube, getInstagram, getFacebook } = require("./controller");

const router = express.Router();
router.get("/tiktok/:url", getTikTok);
router.get("/youtube/:url", getYoutube);
router.get("/instagram/:url", getInstagram);
router.get("/facebook/:url", getFacebook);

module.exports = router;
