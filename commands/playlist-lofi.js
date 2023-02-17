const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-lofi")
    .setDescription("Ouça a melhor playlist de lofi para estudar!"),

  async execute(interaction) {
    await interaction.reply(
      "https://music.youtube.com/watch?v=i43tkaTXtwI&feature=share"
    );
  },
};
