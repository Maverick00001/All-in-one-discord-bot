const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.


require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);
DiscordButtons(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})


client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hru"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("tag"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("whats your name?"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(``)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(``)
  }

});
