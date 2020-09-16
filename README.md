# inwx-mailcow-dns-configurator
Unfortunately the INWX web interface only lets you enter one DNS entry at a time and adding multiple domains to your mail server can get really annoying there.
So I wrote this for quickly adding new domains to my mailserver. It is also possible to add a new mail server (add A and AAAA records as well).

This is more a tool that automates entering the needed DNS records and assumes that you know what you are doing.

## TODO

* Implement CLI
* Cleanup
* Make SPF, DKIM and DMARC entries more configurable (via config)
* Save entered DNS-entry-IDs for deleteing them *(maybe)*

## Prerequisites

* NodeJS >= 8.x.x

## Installation

``` bash
git clone https://github.com/deg0nz/inwx-mailcow-dns-configurator
cd inwx-mailcow-dns-configurator
npm install
```

## Configure

Please refer to [https://mailcow.github.io/mailcow-dockerized-docs/prerequisite-dns/](https://mailcow.github.io/mailcow-dockerized-docs/prerequisite-dns/) for DNS configuration options.

The testing API is for INWX's testing instance [https://ote.inwx.de](https://ote.inwx.de), the production API is for the normal inwx.de. You can make an account on the OTE instance and test your configuration at first use.

The `dns_records` object defines whether certain DNS entries should be created or not.

Edit `config.json` to your needs:

``` json
{
  "login": {
    "api": "testing",
    "user": "<USERNAME>",
    "password": "<YOU KEY>"
  },
  "domains": {
    "dns_entry_domain": "123qwe.eu",
    "mailserver": "mail.123qwe.eu"
  },
  "dkim_public_key": "<YOUR-KEY>",
  "mailauth_reports_address": "foo@bar.com",
  "mail_records": {
    "a": "192.168.0.1",
    "aaaa": "fe80::1"
  },
  "dns_records" : {
    "mail_a": false,
    "mail_aaaa": false,
    "dmarc_txt": false,
    "dkim_txt": true,
    "autodiscover_cname":true,
    "autoconfig_cname": true,
    "mx": true,
    "pop3_srv": true,
    "pop3s_srv": true,
    "imap_srv": true,
    "imaps_srv": true,
    "smtps_srv": true,
    "submission_srv": true,
    "autodiscover_srv": true,
    "spf_txt": true,
    "caldav_srv": true,
    "caldav_txt": true,
    "carddav_srv": true,
    "carddav_txt": true
  }
}
```

## Run

Until the real Command Line Interface is not ready, you need to run the `index.js` directly:

``` bash
node index.js
```
