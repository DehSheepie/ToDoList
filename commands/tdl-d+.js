const Discord = require('discord.js');
const functions = require('../functions.js');
module.exports = {
  name: ['tdld+', 'tdl+'],
  description: 'Show and edit your daily todo list',
  execute(message, args)
  {
    // This should probably be it's own function
    let user = message.author.id;
    if (functions.checkFileExists(`${user}.json`))
    {
      // Data should contain:
      // user: int
      // tdld: [str]
      // tdll: [str]
      let data = functions.getData(`${user}.json`);
      for (var i  = 0; i < args.length; i++)
      {
          data['tdld'].push(args[i]);
      }
      functions.writeData(user, data);
      message.reply("The todos have been added to your list.");
    }
    else
    {
        let data =
        {
            'user': user,
            'tdld': [],
            'tdll': []
        }
        functions.writeData(user, data)
        message.reply("Your file has been created!");
    }
  }
}
