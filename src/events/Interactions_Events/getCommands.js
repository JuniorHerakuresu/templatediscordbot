const getFiles = require("../../../Utils/handler");
let Modules = new getFiles("./src/modules")
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, Sakura) {
        try {
            const command = Modules.getFiles().find(commands => commands.type === `Interaction`);
            if (!command) return;
            await command.execute(interaction, Sakura);
            // Sakura.deleteCommand(interaction.data.id)
            // const command = Sakura.commands.get(interaction.commandName);
            // if (!command) return;
            // await command.execute(interaction, Sakura);
        } catch (error) {
            console.log(error)
            // await interaction.reply({ content: `**There was an error while executing this command!**\nError ID: ${Date.now()}\nCreated By: ${interaction.user.tag}\nChannel: ${interaction.channel.name}\nHas reported to Developer`, ephemeral: true });
            //await Sakura.channels.cache.get("912303583658135552").send({ content: `Created by: ${interaction.user.tag}\n\n\`\`\`js\n${error.stack}\`\`\`\n**--------------------------------------------**` })
        }
    },
};