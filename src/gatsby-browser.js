require("vanilla-cookieconsent/dist/cookieconsent.css");
var CookieConsent = require("vanilla-cookieconsent");
const { isPluginDisabled } = require("./utils");

exports.onInitialClientRender = (_, pluginOptions) => {
  if (isPluginDisabled(pluginOptions)) return null;

  CookieConsent.run(pluginOptions.cookieConsentConfig);
};

exports.onRouteUpdate = ({ location }, pluginOptions = {}) => {
  if (isPluginDisabled(pluginOptions) || typeof gtag !== `function`) {
    return null;
  }

  const pluginConfig = pluginOptions.googleGtagPluginConfig.pluginConfig || {};

  const pathIsExcluded =
    location &&
    typeof window.excludeGtagPaths !== `undefined` &&
    window.excludeGtagPaths.some((rx) => rx.test(location.pathname));

  if (pathIsExcluded) return null;

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;
    window.gtag(`event`, `page_view`, { page_path: pagePath });
  };

  const { delayOnRouteUpdate = 0 } = pluginConfig;

  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(sendPageView, delayOnRouteUpdate));
    });
  } else {
    // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
    setTimeout(sendPageView, 32 + delayOnRouteUpdate);
  }

  return null;
};
