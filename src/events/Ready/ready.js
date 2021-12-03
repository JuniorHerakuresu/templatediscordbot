
module.exports = {
    name: 'ready',
    async execute(Sakura) {
        try {
            require("./createCommands")(Sakura);
        } catch (error) {
            console.log(error.message)
        }
    },
};