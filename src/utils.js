export const isPluginDisabled = (pluginOptions) => {
    return !pluginOptions.enableForAllEnvironments && process.env.NODE_ENV !== `production` && process.env.NODE_ENV !== `test`
}
