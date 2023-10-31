const tiktokDl = require("@sasmeee/tkdl");
const { YTDL } = require("ytdl-easy");
const instagramDl = require("@sasmeee/igdl");
const { fbdl2 } = require("vihangayt-fbdl");

const getTikTok = async (req, res) => {
  const { url } = req.params;
  console.log(url);
  const result = await tiktokDl(decodeURIComponent(url));
  return res.status(200).json(result);
};

const getYoutube = async (req, res) => {
  const { url } = req.params;
  const result = await YTDL(decodeURIComponent(url));
  return res.status(200).json(result);
};

const getInstagram = async (req, res) => {
  const { url } = req.params;
  const result = await instagramDl(decodeURIComponent(url));
  return res.status(200).json(result);
};

const getFacebook = async (req, res) => {
  const { url } = req.params;
  const result = await fbdl2(decodeURIComponent(url));
  return res.status(200).json(result);
};

module.exports = { getTikTok, getYoutube, getInstagram, getFacebook };
