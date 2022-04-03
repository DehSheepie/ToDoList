const Discord = require('discord.js');
const functions = require('../functions.js');
module.exports = {
  name: ['tdl', 'tdl-d'],
  description: 'Show and edit your daily todo list',
  execute(message, args)
  {
    let user = message.author.id;
    if (functions.checkFileExists(`${user}.json`))
    {
      // Data should contain:
      // user: int
      // tdl-d: [str]
      // tdl-l: [str]
      let data = functions.getData(`${user}.json`);
      message.reply("I have your file!");
      message.reply(`Your daily todo list: ${data[`tdl-d`]}`);
    }
    else
    {
        let data =
        {
            'user': user,
            'tdl-d': [],
            'tdl-l': []
        }
        functions.writeData(user, data)
        message.reply("Your file has been created!");
    }
  }
}
