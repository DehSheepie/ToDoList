const Discord = require('discord.js');
module.exports = {
  name: 'help',
  description: 'Useful info on how to use this bot.',
  execute(message, args)
  {
    // prepares the embed
    const embed = new Discord.MessageEmbed()
    .setTitle("Help!")
    .setColor(0xff0000)
    .setDescription("I'm going to try to put useful info on how to use this bot here! \
    Below are some ~~hopefully~~ useful command descriptions\!")
    .addFields(
      {name: '\u200b', value: '\u200b'},
      {name: "__**tdld/tdl**__", value:"**Your daily to do list!** Use this command to have a look at what you need to do today.", inline: true},
      {name: "__**tdll**__", value:"**Your longterm to do list!** Use this command to check in with your dreams and aspirations ^-^.", inline: true},
      {name: '\u200b', value: '\u200b'},
      {name: "__**tdld+/tdl+**__", value:"Need to add a todo? Use this command to **add a todo to your daily list**.", inline: true},
      {name: "__**tdll+**__", value:"Got some longterm goals and aspirations to jot down? Use this command to **add to your longterm todo list**.", inline:true},
    )

    // sends the embed
    message.channel.send({embeds: [embed]});
  }
}
