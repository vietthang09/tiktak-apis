const tiktokURL = "https://www.tiktok.com/@vangha1997/video/7274197436439088430";
const youtubeURL = "https://www.youtube.com/watch?v=GoXkMBWdV84";
const instagramURL = "https://www.instagram.com/reel/CyLY1DsNmUh";
const facebookURL =
  "https://www.facebook.com/ngakakocak/videos/video-lucu-dan-gokil/607085686836013";
const tiktokDl = require("@sasmeee/tkdl");
async function test() {
  const data = await tiktokDl(tiktokURL);
  console.log(data);
}
test();
