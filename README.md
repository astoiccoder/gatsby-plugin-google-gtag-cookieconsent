# gatsby-plugin-google-gtag-cookieconsent

This is an altered fork of [gatsby-plugin-google-gtag](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag).

Since this might here the [README](./README.gtag.md) at the time of the fork.

## Purpose

Easy configurable plugin to have a cookie consent popup with opt-in before loading any gtag script as required by some gdpr laws.

It stitches together the [gatsby-plugin-google-gtag](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag) plugin
with this awesome [cookieconsent](https://github.com/orestbida/cookieconsent) library.

## Usage

Install the plugin via

```bash
npm install --save gatsby-plugin-google-gtag-cookieconsent
```

Add this to your `gatsby-config.js`

```js
    {
      resolve: `gatsby-plugin-google-gtag-cookieconsent`,
      options: {
        cookieConsentConfig: { ... },
        enableForAllEnvironments: true,
        googleGtagPluginConfig: { ... },
      },
    },
```

You might want to set `enableForAllEnvironments` to `false` to only enable the plugin for production builds.

In order to save space in your config file, I would recommend to move the extensive cookie consent config into a separate file, e.g. `cookie-consent-config`: 

```js
exports.cookieConsentConfig = {
  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {},
  },
  language: {
    default: "en",
    translations: {
      en: {
        consentModal: {
          ...
        },
        preferencesModal: {
          ...
        },
      },
    },
  },
};
```

And then import it in your `gatsby-config.js`

```js
const { cookieConsentConfig } = require("./cookie-consent-config");
```

For detailed information of the available config please reference [cookieconsent](https://github.com/orestbida/cookieconsent) or [gatsby-plugin-google-gtag](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag) directly.

Quick example configs can be found in the [examples](./examples) folder.
