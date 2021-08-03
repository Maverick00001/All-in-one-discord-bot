const Discord = require("discord.js");
const ButtonPages = require("discord-button-pages");

module.exports.config = {
    name: "partners",
    cooldown: '1',
    group: "info",
    example: 'partners',
    usage: 'partners',
    description: "Shows Heist Partners of the server!"
}

module.exports.run = async(client, message, args) => {
  
  const embed1 = new Discord.MessageEmbed()
        .setTitle('Embed #1')
        .setColor('RED');
        
    const embed2 = new Discord.MessageEmbed()
        .setTitle('Embed #2')
        .setColor('YELLOW');
        
    const embed3 = new Discord.MessageEmbed()
        .setTitle('Embed #3')
        .setColor('BLUE');
    
    const embedPages = [embed1, embed2, embed3];
    ButtonPages.createPages(client.interaction, message, embedPages, 60 * 1000, "red", "👉", "👈", "❌");
}