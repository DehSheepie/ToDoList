module.exports = {
  name: 'help',
  description: 'Useful info on how to use this bot.',
  execute(message, args){
    const Discord = require('discord.js');

    // prepares the embed
    const embed = new Discord.MessageEmbed()
    .setTitle("Help!")
    .setColor(0xff0000)
    .setDescription("I'm going to try to put useful info on how to use this bot here!");

    // sends the embed
    message.channel.send({embeds: [embed]});
    console.log("I should be sending a help message");
  }
}
