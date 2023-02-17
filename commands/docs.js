const {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

const row = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Nenhuma linguagem selecionada")
    .addOptions(
      {
        label: "JavaScript",
        description: "Veja a documentação do JavaScript!",
        value: "javascript",
      },
      {
        label: "Python",
        description: "Veja a documentação do Python!",
        value: "python",
      },
      {
        label: "C#",
        description: "Veja a documentação do C#!",
        value: "csharp",
      },
      {
        label: "Dart",
        description: "Veja a documentação do Dart!",
        value: "dart",
      },
      {
        label: "Flutter",
        description: "Veja a documentação do Flutter!",
        value: "flutter",
      },
      {
        label: "discord.js",
        description: "Veja a documentação do Discord.js!",
        value: "discordjs",
      }
    )
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acesse a documentação da tecnologia que quiser!"),

  async execute(interaction) {
    await interaction.reply({
      content: "Selecione uma tecnologia abaixo:",
      components: [row],
    });
  },
};
