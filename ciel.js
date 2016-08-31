var ansi = require('ansi')(process.stdout);

module.exports = {
   ok: function(logElement){
      ansi.black().bg.green().write('  OK  ').reset().write(' ');
      console.log(logElement);
   },
   fail: function(logElement){
      ansi.brightWhite().bg.red().write(' FAIL ').reset().write(' ');
      console.log(logElement);
   },
   warn: function(logElement){
      ansi.red().bg.brightWhite().write(' WARN ').reset().write(' ');
      console.log(logElement);
   },
   status: function(logElement){
      ansi.brightYellow().bg.blue().write('STATUS').reset().write(' ');
      console.log(logElement);
   },
   folder: function(logElement){
      ansi.brightYellow().bg.magenta().write('FOLDER').reset().write(' ');
      console.log(logElement);
   },
   dupe: function(logElement){
      ansi.brightCyan().bg.magenta().write(' DUPE ').reset().write(' ');
      console.log(logElement);
   },
   skip: function(logElement){
      ansi.brightGreen().bg.blue().write(' SKIP ').reset().write(' ');
      console.log(logElement);
   }
};