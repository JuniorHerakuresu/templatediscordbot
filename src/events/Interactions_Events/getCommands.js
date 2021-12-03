const getFiles = require("../../../Utils/handler");
let Modules = new getFiles("./src/modules")
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, bot) {
        try {
            const command = Modules.getFiles().find(commands => commands.type === `Interaction`);
            if (!command) return;
            await command.execute(interaction, bot);
        } catch (error) {
            console.log(error)
        }
    },
};