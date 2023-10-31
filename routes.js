const express = require("express");
const {
  getTikTok,
  getYoutube,
  getInstagram,
  getFacebook,
} = require("./controller");

const router = express.Router();
router.post("/tiktok", getTikTok);
router.post("/youtube", getYoutube);
router.post("/instagram", getInstagram);
router.post("/facebook", getFacebook);

module.exports = router;
