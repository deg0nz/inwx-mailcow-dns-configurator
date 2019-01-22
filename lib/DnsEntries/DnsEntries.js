

// Options: {type: "A", name: "test", prio: 0, content: "192.168.0.1"}

class DnsEntries {

  constructor(config) {
    this.mailserver = config.domains.mailserver;
    this.dkim_pub_key = config.dkim_public_key;
    this.mail_a = config.mail_records.a;
    this.mail_aaaa = config.mail_records.aaaa;
    this.mailauth_reports = config.mailauth_reports_address;

    return this._getEntriesObject();
  }

  _getEntriesObject() {
    const dnsEntries = {

      mail_a: {
        options: {
          type: "A",
          name: "mail",
          prio: 0,
          content: this.mail_a
        }
      },

      mail_aaaa: {
        options: {
          type: "AAAA",
          name: "mail",
          prio: 0,
          content: this.mail_aaaa
        }
      },

      autodiscover_cname: {
        options: {
          type: "CNAME",
          name: "autodiscover",
          prio: 0,
          content: this.mailserver
        }
      },

      autoconfig_cname: {
        options: {
          type: "CNAME",
          name: "autoconfig",
          prio: 0,
          content: this.mailserver
        }
      },

      mx: {
        options: {
          type: "MX",
          name: "@",
          prio: 0,
          content: this.mailserver
        }
      },

      pop3_srv: {
        options: {
          type: "SRV",
          name: "_pop3._tcp",
          prio: 0,
          content: "1 110 " + this.mailserver + "."
        }
      },

      pop3s_srv: {
        options: {
          type: "SRV",
          name: "_pop3s._tcp",
          prio: 0,
          content: "1 995 " + this.mailserver + "."
        }
      },

      imap_srv: {
        options: {
          type: "SRV",
          name: "_imap._tcp",
          prio: 0,
          content: "1 143 " + this.mailserver + "."
        }
      },

      imaps_srv: {
        options: {
          type: "SRV",
          name: "_imaps._tcp",
          prio: 0,
          content: "1 993 " + this.mailserver + "."
        }
      },

      smtps_srv: {
        options: {
          type: "SRV",
          name: "_smtps._tcp",
          prio: 0,
          content: "1 465 " + this.mailserver + "."
        }
      },

      submission_srv: {
        options: {
          type: "SRV",
          name: "_submission._tcp",
          prio: 0,
          content: "1 587 " + this.mailserver + "."
        }
      },

      autodiscover_srv: {
        options: {
          type: "SRV",
          name: "_autodiscover._tcp",
          prio: 0,
          content: "1 443 " + this.mailserver + "."
        }
      },

      sieve_srv: {
        options: {
          type: "SRV",
          name: "_sieve._tcp",
          prio: 0,
          content: "1 4190 " + this.mailserver + "."
        }
      },

      dkim_txt: {
        options: {
          type: "TXT",
          name: "dkim._domainkey",
          prio: 0,
          content: "\"v=DKIM1; k=rsa; t=s; s=email; p=" + this.dkim_pub_key + "\""
        }
      },

      spf_txt: {
        options: {
          type: "TXT",
          name: "@",
          prio: 0,
          content: "\"v=spf1 mx ~all\""
        }
      },

      dmarc_txt: {
        options: {
          type: "TXT",
          name: "_dmarc ",
          prio: 0,
          content: "\"v=DMARC1; p=reject; rua=mailto:" + this.mailauth_reports + "\""
        }
      },

      carddav_srv: {
        options: {
          type: "SRV",
          name: "_carddavs._tcp ",
          prio: 0,
          content: "1 443 " + this.mailserver + "."
        }
      },

      carddav_txt: {
        options: {
          type: "TXT",
          name: "_carddavs._tcp ",
          prio: 0,
          content: "\"path=/SOGo/dav/\""
        }
      },

      caldav_srv: {
        options: {
          type: "SRV",
          name: "_caldavs._tcp ",
          prio: 0,
          content: "1 443 " + this.mailserver + "."
        }
      },

      caldav_txt: {
        options: {
          type: "TXT",
          name: "_caldavs._tcp ",
          prio: 0,
          content: "\"path=/SOGo/dav/\""
        }
      },
    };

    return dnsEntries;
  }
}

module.exports = DnsEntries;