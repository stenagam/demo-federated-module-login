// Webpack stuff (async boundary), for ensuring the remote modules loads before being used
// see: https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption
import("./bootstrap.js")
