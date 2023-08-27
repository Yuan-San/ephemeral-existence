const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)

// const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  // Check if the message contains the word "hi"
  if (message.channel.id == 1145386063729266728) {
    // Send a response to the message
    if (message.author !== client.user) {
    await characterAI.authenticateAsGuest();

    const characterId = "AEcOCw-PvQyxifqwKoZC93nI3sMtcOD0Z2vRhjaz5YA"
    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse(message.content, true)

    message.reply(response)
  }}
});


// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login(mySecret = process.env['TOKEN']);

