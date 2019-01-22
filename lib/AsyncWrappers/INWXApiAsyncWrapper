class INWXApiAsyncWrapper {

  constructor(api) {
    this.api = api;
  }

  // Options: {type: "A", name: "test", prio: 0, content: "192.168.0.1"}
  createRecord(domain, options) {
    return new Promise ((resolve, reject) => {
      this.api.nameserverRecordHelper(domain, "create", options, (response) => {
          resolve(response);
        },
        (response) => {
          reject(response);
        });
    })
  }

  // Not working due to API changes sincs inwx npm package was updated the last time
  deleteRecord(domain, options) {
    return new Promise ((resolve, reject) => {
      this.api.nameserverRecordHelper(domain, "delete", options, (response) => {
          resolve(response);
        },
        (response) => {
          reject(response);
        });
    })
  }
}

module.exports = INWXApiAsyncWrapper;