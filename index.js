const { Client, Events, GatewayIntentBits } = require("discord.js");

//importação dos commands
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath.filter(".js"));

const dotenv = require("dotenv");
dotenv.config();
const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado como: ${c.user.tag}`);
});

client.login(TOKEN);
