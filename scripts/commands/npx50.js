const fs = require("fs");
module.exports.config = {
	name: "npxsfuck",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad Rana", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🫂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤍")==0 || event.body.indexOf("🫂")==0 || event.body.indexOf("🤦‍♂️")==0 || event.body.indexOf("😊")==0) {
		var msg = {
				body: "- মানুষ পরিবর্তনশীল 🙂 ভয়ঙ্কর পরিবর্তন 😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/mtx.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
