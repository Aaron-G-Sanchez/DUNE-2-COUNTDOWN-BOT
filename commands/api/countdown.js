const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('countdown')
    .setDescription('Calculates days left until Dune 2 releases'),

  async execute(interaction) {
    let unix_timestamp = Date.now()

    let date = new Date(unix_timestamp).toString()

    // let hours = date.getHours(date)
    // let minutes = date.getMinutes(date)
    // let seconds = date.getSeconds(date)

    // let formattedTime = hours + ':' + minutes + ':' + seconds

    await interaction.reply({
      content: `${date}`,
      ephemeral: true
    })
  }
}
