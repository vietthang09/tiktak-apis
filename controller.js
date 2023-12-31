const { TiktokDL } = require("@tobyg74/tiktok-api-dl");
const { YTDL } = require("ytdl-easy");
const instagramDl = require("@sasmeee/igdl");
const { fbdl2 } = require("vihangayt-fbdl");

const getTikTok = async (req, res) => {
  const { url } = req.body;
  const result = await TiktokDL(url, {
    version: "v1",
  });
  return res.status(200).json(result);
};

const getYoutube = async (req, res) => {
  const { url } = req.body;
  const result = await YTDL(decodeURIComponent(url));
  return res.status(200).json(result);
};

const getInstagram = async (req, res) => {
  const { url } = req.body;
  const result = await instagramDl(decodeURIComponent(url));
  return res.status(200).json(result);
};

const getFacebook = async (req, res) => {
  const { url } = req.body;
  const result = await fbdl2(decodeURIComponent(url));
  return res.status(200).json(result);
};

module.exports = { getTikTok, getYoutube, getInstagram, getFacebook };
