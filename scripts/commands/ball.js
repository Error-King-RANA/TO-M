module.exports.config = {
    name: "ball", 
    version: "1.0.0", 
    permission: 0,
    credits: "SK-SIDDIK-KHAN",
    description: "",
    prefix: true,
    category: "love", 
    usages: "user", 
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onStart = async function ({ message, event, args }) {
    const mention = Object.keys(event.mentions);
    if (mention.length == 0) {
        return message.reply("Please mention someone to kick the ball.");
    } else {
        const one = event.senderID, two = mention[0];
        bal(one, two).then(ptth => { 
            message.reply({ 
                body: "Here is your ball shot! 😹", 
                attachment: fs.createReadStream(ptth) 
            });
        });
    }
};

async function bal(one, two) {
    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    avone.circle();
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    avtwo.circle();
    let pth = "ball.png";
    let img = await jimp.read("https://i.ibb.co/6Jz7yvX/image.jpg");

    img.resize(1080, 1320)
       .composite(avone.resize(170, 170), 200, 320)
       .composite(avtwo.resize(170, 170), 610, 70);

    await img.writeAsync(pth);
    return pth;
                }
