export const isPluginDisabled = (pluginOptions) => {
    if (pluginOptions.enabled !== undefined) {
        return !pluginOptions.enabled;
    }
    // keep for backwards compatibility
    return !pluginOptions.enableForAllEnvironments && process.env.NODE_ENV !== `production` && process.env.NODE_ENV !== `test`
}
