const { Client, Intents } = require("discord.js");
const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // These 2 intents are REQUIRED for this example to function.

client.login("OTE5NjM1MDMyMDU2OTM4NDk2.YbYq3Q.R2XQSGpsNZKXi9n6GR7SSAk8wwU"); // Enter your token here.

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`dans ${client.guilds.cache.size} servers`);
});

client.on("messageCreate", (message) => {
  if (message.channel.name == "🌍︙𝐆𝐞́𝐧𝐞́𝐫𝐚𝐥")  { // The bot will only look for messages with the channel named "chatbot"
    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
    allowedMentions: { repliedUser: false };
    }
    message.channel.sendTyping();
    if (!message.content) return message.reply({ content: "Please say something.", allowedMentions: { repliedUser: false }});
    scb.chat({message: message.content, name: client.user.username, owner:"CoolOwnerName", user: message.author.id, language:"en"}).then(reply => { 
    message.reply({ content: reply, allowedMentions: { repliedUser: false }});
    })
    message.channel.sendTyping();
  }
});

