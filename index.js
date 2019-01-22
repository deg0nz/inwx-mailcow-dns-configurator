const inwx = require('./lib/AsyncWrappers/INWXAsyncWrapper');
const DnsEntries = require('./lib/DnsEntries/DnsEntries');
const config = require('./config');

async function run() {

  let dnsEntries = new DnsEntries(config);

  try {

    let api = await new inwx(config.login.api, config.login.user, config.login.password);

    Object.entries(config.dns_records).forEach(async (entry, i) => {

      let key = entry[0];
      let value = entry[1];

      if (value === true) {
        try {

          let res = await api.createRecord(config.domains.dns_entry_domain, dnsEntries[key].options);

          console.log("Entry " + key + " created");
          console.log("Message: ");
          console.log(res);

        } catch (e) {

          if(e.code === 2005){
            console.log("KEY: " + key);
          }

          if(e.code === 2302) {
            console.error("Key exists: " + key);
            // console.error(e);
          }
        }
      }
    });

  } catch (e) {
    console.error(e)
  }
}

run();