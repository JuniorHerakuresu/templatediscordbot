module.exports = {
    type: `Interaction`,
    name: `test`,
    data: {
        name: 'test',
        description: `That's a test command`,
        options: [],
    },
    async execute(interaction, bot) {
        interaction.createMessage({ flags: 64, content: "Tha't a test message" })
    }
};