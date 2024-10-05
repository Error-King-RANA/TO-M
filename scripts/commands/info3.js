module.exports.config = {
    name: "owner",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: false,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`∂σ ɳσƭ ƭɾµรƭ ƭɦε ɓσƭ σρεɾαƭσɾ

╭───────────────────╮
╰┈➤❝ My Boss Information❞
︶︶︶︶︶︶︶︶︶︶︶︶︶︶
 ╭──────────────────╮
💭.𝐀𝐒𝐒𝐀𝐋𝐀𝐌𝐔 𝐖𝐀𝐋𝐀𝐈𝐊𝐔𝐌.💭
 ╰──────────────────╯
╭⋟───────────────────────╮
 নাঁমঁ      : মোৃঁহাৃঁম্মৃঁদৃঁ রাৃঁনাৃঁ 🤍🫣
 ধঁর্মঁ       : ইঁসঁলাঁমঁ 🤍🫣
 বাঁসাঁ      : পঁঞ্চঁগঁড়ঁ 🤍🫣
 বঁয়ঁসঁ      : (17+)  🤍🫣
 ওঁজঁনঁ     : 46+ 🖤💭
 রঁক্তঁ      : O+ 🖤💭
 গাঁয়েঁরঁ রং  : শেঁমঁলাঁ 🖤💭
 বেঁয়াঁদঁবিঁ   : আৃঁগেৃঁ কৃঁরৃঁতাৃঁমৃঁ এৃঁখৃঁনৃঁ নাৃঁ 🖤🫂
 ধঁনঁ সঁম্পঁদঁ  : আৃঁছেৃঁ কিৃঁন্তৃঁ আঁমিঁ জাঁনিঁ নাঁ 🖤🫂
 ভাঁলোঁবাঁসাঁ  : ভাৃঁইৃঁ আৃোমিৃঁ পিৃঁওৃঁরৃঁ সিৃঁন্গেৃঁলৃঁ 🖤🫂
 শঁখঁ       : তোঁমাঁরেঁ বঁলেঁ কিঁ লাঁভঁ পুঁরঁনঁ কঁইঁরাঁ দিঁবাঁ 😼🥹
╰────────────────────────⋞╯

🐰বা্ঁর্ঁবি্ঁ ড্ঁল্ঁ👀💦`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100067540204855/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
