const getFiles = require("../../../Utils/handler");
let Modules = new getFiles("./src/modules")
module.exports = Sakura => {

    Modules.getFiles().forEach(async module => {
        if (module.type === "Interaction") {
            Sakura.createGuildCommand("572486013356605455", module.data)
        }
    })
};