const tiktok = "https://www.tiktok.com/@vangha1997/video/7274197436439088430";
const youtubeURL = "https://www.youtube.com/watch?v=GoXkMBWdV84";
const instagram = "https://www.instagram.com/reel/CyLY1DsNmUh";
const facebookURL =
  "https://www.facebook.com/ngakakocak/videos/video-lucu-dan-gokil/607085686836013";
  const fbDownloader = require("fb-downloader-scrapper")
async function test() {
  const data = await fbDownloader(facebookURL);
  console.log(data); 
}
test();
