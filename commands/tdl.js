const Discord = require('discord.js');
const functions = require('../functions.js');
module.exports = {
  name: 'tdl',
  description: 'Show and edit your todo list',
  execute(message, args)
  {
    let user = message.author.id;
    if (functions.checkFileExists(`${user}.json`))
    {
      message.reply("I have your file!");
    }
    else
    {
        functions.createFile(user, {})
        message.reply("Your file has been created!");
    }
  }
}
