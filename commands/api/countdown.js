const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('countdown')
    .setDescription('Calculates days left until Dune 2 releases'),

  async execute(interaction) {
    const endDate = new Date('Mar 1, 2024 00:00:00').getTime()

    let now = new Date().getTime()

    let daysLeft = endDate - now

    let days = Math.floor(daysLeft / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((daysLeft % (1000 * 60)) / 1000)

    const countdown =
      days +
      'd' +
      hours +
      'h' +
      minutes +
      'm' +
      seconds +
      's' +
      ' left until Dune 2'

    await interaction.reply({
      content: `${countdown}`
    })
  }
}
