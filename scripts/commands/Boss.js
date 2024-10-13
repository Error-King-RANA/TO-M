const fs = require("fs");
module.exports.config = {
	name: "Botboss",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") || react.includes("bos ke") || react.includes("kar bot")) {
		var msg = {
				body: "আসসালামু আলাইকুম 🤍🌺 আমি 🥰 Mohammad RANA (TOM) এর ভদ্র বট...😐🙈 FB LINK :https://www.facebook.com/RANA.IS.BUSY.OKAY 🤍"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
