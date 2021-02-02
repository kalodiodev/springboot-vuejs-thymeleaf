// vue.config.js
const path = require('path');

module.exports = {
  runtimeCompiler: true,
  outputDir: 'src/main/resources/static/app',
  indexPath: 'templates/index.html',
  filenameHashing: false,
  // delete HTML related webpack plugins
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config
        .entry("app")
        .clear()
        .add("./frontend/main.js")
        .end();
    config.resolve.alias
        .set("@", path.join(__dirname, "./frontend"))
  }
};