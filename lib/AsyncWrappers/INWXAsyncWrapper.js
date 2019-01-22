const inwx = require('inwx');
const inwxApiAsyncWrapper = require('./INWXApiAsyncWrapper');

class INWXAsyncWrapper {

  constructor(api, user, password) {
    this.login = {
      api: api,
      user: user,
      password: password
    };

    return new Promise((resolve, reject) => {
      try {
        inwx(this.login, (api) => {
          resolve(new inwxApiAsyncWrapper(api));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = INWXAsyncWrapper;
