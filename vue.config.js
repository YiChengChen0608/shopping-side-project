// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/assets/styles/_variables.scss";
            `
      }
    }
  }
}
