const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-lofi-br")
    .setDescription("Ouça a melhor playlist de lofi br para estudar!"),

  async execute(interaction) {
    await interaction.reply(
      "https://music.youtube.com/watch?v=23veejsZ5r4&feature=share"
    );
  },
};
