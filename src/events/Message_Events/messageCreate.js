const getFiles = require("../../../Utils/handler");
let Modules = new getFiles("./src/modules")
module.exports = {
    name: 'messageCreate',
    async execute(Message, bot) {
        try {
            const args = await Message.content.slice(1).trim().split(/ +/g);
            const commandName = await args.shift().toLowerCase();
            const command = Modules.getFiles().find(commands => commands.name === commandName && commands.type === `Message`);
            if (command && Message.content.indexOf("+") === 0) command.execute(Message, bot, args);
        } catch (error) {
            console.log(error.message)
        }
    },
};