// Allows access to Discord.js stuff through Discord const
const Discord = require('discord.js');

const {token} = require('./private.json');

const {prefex} = require('./config.json');

// Create new client instance
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]});

// Runs once on startup
client.once('ready', () => {
  console.log('To Do List is online!');
});

client.login(token);
