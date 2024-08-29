const { cookieConsentConfig } = require("./cookie-consent-config");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag-cookieconsent`,
      options: {
        cookieConsentConfig: cookieConsentConfig,
        enabled: process.env.NODE_ENV === 'production', // replace this with any condition you need
        googleGtagPluginConfig: {
          trackingIds: [
            "GA_ID", // Google Analytics / GA
          ],
          gtagConfig: {
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
          },
          pluginConfig: {
            head: false,
            respectDNT: true,
            exclude: ["/preview/**"],
            origin: "https://www.googletagmanager.com",
          },
        },
      },
    },
  ].filter(Boolean),
};
