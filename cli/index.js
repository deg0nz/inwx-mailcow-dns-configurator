"use strict";
const Program = require('commander');

Program.version('0.1.0');

Program
  .option('-d, --delete <domain>', 'Delete all DNS entries of a domain that are marked with true in the config (this needs a JSON file with the domain\'s name in the save folder)', String)
  .option('--idsFile')
  .parse(process.argv);