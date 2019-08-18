const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(" 612071544226578473")
setInterval(function() {
channel.send(`abo mohamed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);