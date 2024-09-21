const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/YZHtq60.mp4",
  "https://i.imgur.com/1IeHri1.mp4",
  "https://i.imgur.com/jQgBFcT.mp4",
  "https://i.imgur.com/pbxDY0g.mp4",
  "https://i.imgur.com/ADebnuP.mp4",
  "https://i.imgur.com/3ZlqMPF.mp4",
  "https://i.imgur.com/OtT6YTF.mp4",
  "https://i.imgur.com/YzrnBAe.mp4",
  "https://i.imgur.com/Q5EGM9J.mp4",
  "https://i.imgur.com/IqwB8UU.mp4",
  "https://i.imgur.com/p5dA98S.mp4",
  "https://i.imgur.com/ZRcIYF9.mp4",
  "https://i.imgur.com/Dt8xSXU.mp4",
  "https://i.imgur.com/lmfiBRp.",
  "https://i.imgur.com/vHmIR2a.mp4",
  "https://i.imgur.com/PIHFTTz.mp4",
  "https://i.imgur.com/BQOw4V2.mp4",
  "https://i.imgur.com/Is9sLgx.mp4",
  "https://i.imgur.com/FkB05ez.mp4",
  "https://i.imgur.com/ZHFe1XF.mp4"
];

module.exports.config = {
  name: "😒",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "😒",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("😒")) {
    const rahad = [
      "_ওই দিকে কি দেখো এ দিকে দেখো..!🫂😍",
      " উম্মম্মমমমমমহহহ..বেবি ওই দিকে কি 😒"
    
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😒"] === "undefined" || data["😒"]) data["😒"] = false;
  else data["😒"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😒"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
