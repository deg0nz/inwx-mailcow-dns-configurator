# inwx-mailcow-configurator
Little program that automatically sets the needed DNS entries for running mailcow at the INWX domain registrar.

This is more a tool that automates entering the needed DNS records and assumes you know what you are doing.

I wrote it for quickly adding new domains to my mailserver.

## TODO

* CLI
* Cleanup
* Make SPF, DKIM and DMARC entries more configurable (via config)
* save entered IDs for deleteing them *(maybe)*

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

Edit config.json:

``` json
{
  "login": {
    "api": "testing",       // testing for ote.inwx.com prod for
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

Until the real Command Loine Interface isn't ready, you need to run the `index.js` directly:

``` bash
node index.js
```