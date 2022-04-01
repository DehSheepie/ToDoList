 // File system module
const fs = require('fs');

// Allows access to Discord.js stuff through Discord const
const Discord = require('discord.js');
const {token} = require('./private.json');
const {prefix, channel} = require('./config.json');

// Create new client instance

const intents = [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES];
const client = new Discord.Client({intents});

client.commands = new Discord.Collection();

// Gets a list of all the command files
const commandFilenames = fs.readdirSync('./commands').filter(file => file.endsWith('js'));

// Loops through all the command files and adds them to the client
for (const file of commandFilenames) {
  const command = require(`./commands/${file}`);
  if (Array.isArray(command.name))
  {
      for (const name of command.name)
      {
        // Checks if a command has varient names and adds them if it does

        /* This kinda duplicates the command instead of linking multiple
        names to the same command but it's probably fine heh..

        I'll come back to this if it becomes a problem.*/
        client.commands.set(name, command);
      }
  }
  else
  {
      client.commands.set(command.name, command);
  }
}

// Runs once on startup
client.once('ready', () => {
  console.log('To Do List is online!');
});

// When client recieves a message
client.on("messageCreate", message => {
  // If the message doesn't start with the prefix, ignore it.
    if (!message.content.startsWith(prefix) || message.author.bot) return
    if (message.channel.name != channel) return;
    console.log(message.channel.name);
    // split content using regex to find space seperator
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // If command doesn't exist show error.
    if (!client.commands.has(command))
    {
      message.reply('Invalid command. :no_entry_sign:');
      return;
    }

    try
    {
      client.commands.get(command).execute(message, args);
    }
    catch (error)
    {
      console.error(error);
      message.reply('There was an error trying to execute that command :( :no_entry_sign:');
    }
});

client.login(token);
