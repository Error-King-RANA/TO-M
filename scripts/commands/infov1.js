module.exports.config = {
  name: "info", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran",
  description: "admin information",
  prefix: true,
  category: "Media", 
  usages: "", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
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
var link = ["https://i.postimg.cc/wjfnFgg9/Picsart-24-07-09-20-34-31-275.jpg","https://i.postimg.cc/Y91ncHKG/1724006315040.jpg"];
  
var callback = () => api.sendMessage({body:`✘𝗔𝗗𝗠𝗜𝗡 & 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡✘ 
________________________________________

➤➤𝗕𝗢𝗧  𝗡𝗔𝗡𝗘 : ${global.config.BOTNAME}

➤➤𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡: 『𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔』

➤➤𝗔𝗗𝗗𝗥𝗘𝗦𝗦    :  𝗧𝗘𝗧𝗨𝗟𝗜𝗔 𝗣𝗔𝗡𝗖𝗛𝗔𝗚𝗔𝗥𝗛 𝗗𝗛𝗔𝗞𝗔

▬▬▬▬▬▬✘𝗖𝗢𝗡𝗧𝗔𝗖𝗧✘▬▬▬▬▬▬

➜➜𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃: https://www.facebook.com/100063487970328 

➜➜𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 : w.me/01752865115

➜➜𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}

➜➜𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 : {𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔}

▬▬▬▬▬▬✘𝗢𝗧𝗛𝗘𝗥 ∞ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡✘▬▬▬▬▬▬

➜𝗧𝗬𝗣𝗘: /admin 

➟ UPTIME

𝗧𝗢𝗗𝗔𝗬𝗦 𝗧𝗜𝗠𝗘 : ${juswa} 

𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 ${hours}:${minutes}:${seconds}.

𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
