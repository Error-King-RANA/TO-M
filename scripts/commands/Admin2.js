module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "owner",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/ft2GMh2.jpeg", 
            
            "https://i.imgur.com/bEkV34k.jpeg", 
            
"https://i.imgur.com/kuSLl6A.jpeg", 
            
            "https://i.imgur.com/pGto0Pp.jpeg"];
  
var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n◄❥͜͡⃟⃝🥀 𝗡𝗮𝗺𝗲       : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗔𝗡𝗔\◄❥͜͡⃟⃝🥀 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗔𝗡𝗔\n◄❥͜͡⃟⃝🥀 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n◄❥͜͡⃟⃝🥀 𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗣𝗮𝗻𝗰𝗵𝗮𝗴𝗮𝗿𝗵 𝗗𝗵𝗮𝗸𝗮)\n◄❥͜͡⃟⃝🥀 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝗧𝗲𝘁𝘂𝗹𝗶𝗮 𝗣𝗮𝗻𝗰𝗵𝗮𝗴𝗮𝗿𝗵\n ◄❥͜͡⃟⃝🥀 𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (17+)\n◄❥͜͡⃟⃝🥀 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁\n◄❥͜͡⃟⃝🥀n 𝗚𝗺𝗮𝗶𝗹        : ranacyber910@gmail.com\n ◄❥͜͡⃟⃝🥀 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801752865115\n ◄❥͜͡⃟⃝🥀 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/ar.rana007\n ◄❥͜͡⃟⃝🥀 𝗙𝗯 𝗹𝗶𝗻𝗸   : https://facebook.com/100063487970328
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
