const inwx = require('./lib/AsyncWrappers/INWXAsyncWrapper');
const DnsEntries = require('./lib/DnsEntries/DnsEntries');
const config = require('./config');
const fs = require('fs');

const del = false;

//TODO: entscheide File handler ja oder nein
//TODO: delete und create funtkionen
//TODO: CLI

async function run() {

  let dnsEntries = new DnsEntries(config);

  try {

    let api = await new inwx(config.login.api, config.login.user, config.login.password);

    // await api.deleteRecord(config.domains.dns_entry_domain, { id: 19927});

    let savedDomain;

    if (del) {
      savedDomain = await new Promise((resolve, reject) => {
        fs.readFile(config.domains.dns_entry_domain + '.json', 'utf8', function readFileCallback(err, data){
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data));
          }});
      });
    }

    let dnsRecordsLength = Object.keys(config.dns_records).length;

    Object.entries(config.dns_records).forEach(async (entry, i) => {

      let key = entry[0];
      let value = entry[1];

      if (value === true) {

        let recordOptions = {
          entryOptions: dnsEntries[key].options,
          i: i,
          key: key
        };

        if(del) {
          deleteRecord(api, recordOptions, savedDomain, config.domains.dns_entry_domain);
        }
        else
        {
          createRecord(api, recordOptions);
        }
      }
    });

  } catch (e) {
    console.error(e)
  }
}

async function deleteRecord(api, options, savedDomain, domain) {
  try {
    let res = await api.deleteRecord(domain, savedDomain[options.key].id);

    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

async function createRecord(api, options) {
  try {

    let res = await api.createRecord(config.domains.dns_entry_domain, options.entryOptions);

    console.log("Entry " + options.key + " created");
    console.log("Message: ");
    console.log(res);

    // add key to response
    res.key = options.key;

    let fileOutput = {
      dns_records: []
    };

    fileOutput.dns_records.push(res);

    if (i === dns_records_length) {
      fs.writeFile(config.dns_entry_domain + '.json', json, 'utf8', callback);
    }

  } catch (e) {

    if(e.code === 2005){
      console.log("KEY: " + options.key);
    }

    if(e.code === 2302) {
      console.log(e);
      console.log("Key: " + options.key);
    }
  }
}

run();