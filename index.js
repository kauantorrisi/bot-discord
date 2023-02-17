const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");

// dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN } = process.env;

// Instância de um Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Importação dos comandos
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

client.commands = new Collection();

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `Esse comando em ${filePath} está com "data" ou "execute" ausente`
    );
  }
}

// Login do bot
client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado como: ${c.user.tag}`);
});

client.login(TOKEN);

// Listener de interações com o bot
client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isStringSelectMenu()) {
    const selectedTech = interaction.values[0];

    switch (selectedTech) {
      case "javascript":
        await interaction.reply(
          "Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        );
        break;
      case "python":
        await interaction.reply(
          "Documentação do Python: https://www.python.org"
        );
        break;
      case "csharp":
        await interaction.reply(
          "Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/"
        );
        break;
      case "dart":
        await interaction.reply(
          "Documentação do Dart: https://dart.dev/guides"
        );
        break;
      case "flutter":
        await interaction.reply(
          "Documentação do Flutter: https://docs.flutter.dev/"
        );
        break;
      case "discordjs":
        await interaction.reply(
          "Documentação do Discord.js: https://discordjs.guide/#before-you-begin"
        );
        break;
      default:
        break;
    }
  }

  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`Comando não encontrado!`);
    return;
  }
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply(`Houve um erro ao executar esse comando x-x`);
  }
});
