module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100063487970328") {
    var aid = ["100063487970328"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["_Mantion দিস না _রানা বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- ভাই আমারে বিরক্ত করতেছিস ভাল কথা ' বস কে ডাকস কেন 🙄", " রানা'র একটা প্রিয়র খুব দরকার কারন তার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," রানা বসকে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল ভাবে রানা বস কে ডাকিস না, বেচারা রানা বস প্রেমে পরে যাবে তো 🫣","রানা বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল রানা রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স"," রানা বসকে মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না রানা প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলো রানা বস🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
