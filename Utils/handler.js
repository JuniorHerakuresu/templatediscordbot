var fs = require("fs");
class Path {
    constructor(path) {
        this.path = path;
    };
    getFiles() {
        var files = new Array();
        function getFolder(path) {
            var files = fs.readdirSync(path);
            files.forEach(file => {
                let result = fs.lstatSync(path + `/` + file).isDirectory();
                if (result === false) getFile(path, file);
                else getFolder(path + `/` + file)
            });
        };
        getFolder(this.path);
        function getFile(path, file) {
            let data = require("." + path + `/` + file);
            files.push(data);
        };
        return files;
    };
};
module.exports = Path;