const packageJson = require("../package.json");

function version() {
    return require('./../package.json').version
}
module.exports = {
    version
}