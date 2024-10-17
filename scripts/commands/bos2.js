module.exports.config = {
  name: "rana",
  version: "1.0.0",
  permission: 0,
  credits: "SK-SIDDIK-KHAN",
  prefix: false,
  description: "",
  category: "rana",
  usages: "user",
  cooldowns: 0
};

module.exports.run = async function ({ event, message, getLang }) {
    const input = event.body && event.body.toLowerCase();
    
    if (!input) return;

    switch (input) {
        case "owner":
            return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔\n╰╼|━━━━━━━━━━━━━━|╾╯");
        case "owners":
        case "mohammad rana":
            return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔\n╰╼|━━━━━━━━━━━━━━|╾╯");
        case "addmin rana":
        case "rana":
            return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔\n╰╼|━━━━━━━━━━━━━━|╾╯");
    }
};
