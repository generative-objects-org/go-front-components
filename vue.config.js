var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [new PeerDepsExternalsPlugin()]
    }
};
