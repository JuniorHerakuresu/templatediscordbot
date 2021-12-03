require("dotenv").config();
const Eris = require("eris");
const getFiles = require("./Utils/handler.js")
let Events = new getFiles("./src/events/")
const bot = new Eris(process.env.DISCORD_TOKEN, {
    intents: [
        "guildMessages",
        "guilds"
    ],
    restMode: true
});
Events.getFiles().forEach(event => {
    if (event.once === true) bot.once(event.name, (...args) => event.execute(...args, bot));
    else bot.on(event.name, (...args) => event.execute(...args, bot));
}); // Get Events//

bot.connect();
