const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-rock")
    .setDescription("Ouça a melhor playlist de rock para estudar!"),

  async execute(interaction) {
    await interaction.reply(
      "https://music.youtube.com/playlist?list=PLIsxubNetrUV5gjgxYjxossYzHAXs-ibw&feature=share"
    );
  },
};
