/**
* shows info about configurations
*/
var Rx = require("rx");

module.exports = function(argv){
  argv
    .command('build', "build matterfront",function(yargs){
      argv = yargs.option("H", {
        alias: 'host',
        describe: "Mattermost host url",
        type: "string",
        demand: true
      })
      .argv;
    })
    .argv;
    console.log(argv._)
}
