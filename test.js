const tiktokURL =
  "https://www.tiktok.com/@vangha1997/video/7274197436439088430";
const youtubeURL = "https://www.youtube.com/watch?v=GoXkMBWdV84";
const instagramURL = "https://www.instagram.com/reel/CyLY1DsNmUh";
const facebookURL =
  "https://www.facebook.com/ngakakocak/videos/video-lucu-dan-gokil/607085686836013";
const ig = require("ig-unduh");
async function test() {
  const data = await ig(link)
  console.log(data);
}
test();
