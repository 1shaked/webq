module.exports = {
  "configureWebpack": {
    "devtool": "source-map"
  },
  "devServer": {
    "proxy": "http://localhost:5000/"
  },
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  "baseUrl": ''
}