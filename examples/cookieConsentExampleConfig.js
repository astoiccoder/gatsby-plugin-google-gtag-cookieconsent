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
            title: "Cookie usage",
            description:
              "The usage of cookies helps to improve the usage of this website.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close modal",
            sections: [
              {
                title: "Type of Cookies",
                description:
                  "Allowing Analytics cookies helps to improve the website.",
              },
              {
                title: "Strictly Necessary cookies",
                description:
                  "These cookies are essential for the proper functioning of the website and cannot be disabled.",
  
                //this field will generate a toggle linked to the 'necessary' category
                linkedCategory: "necessary",
              },
              {
                title: "Performance and Analytics",
                description:
                  "These cookies collect information about how you use the website. All of the data is anonymized and cannot be used to identify you.",
                linkedCategory: "analytics",
              },
              {
                title: "More information",
                description:
                  'For any queries in relation to our policy on cookies and your choices, please see our <a href="/...">Privacy Policy</a> or <a href="/...">contact us</a>.',
              },
            ],
          },
        },
      },
    },
  };
  