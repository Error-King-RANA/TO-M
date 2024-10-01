module.exports.config = {
  name: "r",
  version: "1.0.0",
  Permssion: 1,
  credits: "Rana",
  prefix: false,
  description: "admon only",
  category: "admin only",
  usages: "admin only",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/cqbX8cc.jpeg",
"https://i.imgur.com/Gt8ynGy.jpeg",
"https://i.imgur.com/3jk4uS5.jpeg",
"https://i.imgur.com/jX1OL8l.jpeg",
"https://i.imgur.com/lyYB17b.jpeg",
"https://i.imgur.com/kmvcB0H.jpeg",
"https://i.imgur.com/7Eu306K.jpeg",
"https://i.imgur.com/6rzRYsQ.jpeg",
"https://i.imgur.com/iYsqgGt.jpeg",
"https://i.imgur.com/DJbgde0.jpeg",
"https://i.imgur.com/cqbX8cc.jpeg",
"https://i.imgur.com/kmvcB0H.jpeg",
"https://i.imgur.com/55W8RiV.jpeg",
"https://i.imgur.com/oTEFdUq.jpeg",
"https://i.imgur.com/C6eE8A3.jpeg",
"https://i.imgur.com/27ZRyEM.jpeg",
"https://i.imgur.cg",
"https://i.imgur.ceg",
"https://i.imgur.cL.jpeg",
"https://i.imgur.99AF.jpeg",
"https://i.imgur.cYor.jpeg",
"https://i.imgur.cK2D.jpeg",
"https://i.imgur.coyO.jpeg",
"https://i.imgur.coml.jpeg",
"https://i.imgur.cG.jpeg",
"https://i.imgur.cNZ4N.jpeg",
"https://i.imgur.cosqNN.jpeg",
"https://i.imgur.cob94.jpeg",
"https://i.imgur.cJx4R8Z.jpeg",
"https://i.imgur.coC5d4.jpeg",
"https://i.imgur.comMH.jpeg",
"https://i.imgur.ceVxiN.jpeg",
"https://i.imgur.coPBY.jpeg",
"https://i.imgur.comn7S.jpeg",
"https://i.imgur.covhv.jpeg",
"https://i.imgur.cW2hF86.jpeg",
"https://i.imgur.comtz2peg",
"https://i.imgur.coPzCc.jpeg",
"https://i.imgur.comKcjty.jpeg",
"https://i.imgur.coJzU.jpeg",
"https://i.imgur.co8nmd.jpeg",
"https://i.imgur.cocCWg.jpeg",
"https://i.imgur.cPXrfIl.jpeg",
"https://i.imgur.coOVjcP.jpeg",
"https://i.imgur.coR2F.jpeg",
"https://i.imgur.coCIepKK.jpeg",
"https://i.imgur.coOnuTzF.jpeg",
"https://i.imgur.cofAaJ.jpeg",
"https://i.imgur.comOkpeg",
"https://i.imgur.ceGj.jpeg",
"https://i.imgur.comFovB.jpeg",
"https://i.imgur.coTPuU.jpeg",
"https://i.imgur.coBQ7k.jpeg",
"https://i.imgur.coKnYf.jpeg",
"https://i.imgur.cYfP.jpeg",
"https://i.imgur.conL1.jpeg",
"https://i.imgur.cBtuJ.jpeg",
"https://i.imgur.coHAPqiX.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Do you need $100 to see the photo?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔 img ${link.length}\n-100 img`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
