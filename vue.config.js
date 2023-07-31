module.exports = {
  "pages": {
    "index": {
      "entry": "src/main.js",
      "template": "public/index.html",
      "filename": "index.html"
    }
  },
  "devServer": {
    "clientLogLevel": "warning",
    "hot": true,
    "contentBase": "dist",
    "compress": true,
    "open": true,
    "overlay": {
      "warnings": false,
      "errors": true
    },
    "publicPath": "/",
    "quiet": true,
    "watchOptions": {
      "poll": false,
      "ignored": {}
    }
  },
  "productionSourceMap": false,
  "lintOnSave": false,
  "pluginOptions": {},
  "transpileDependencies": [
    "vue-echarts",
    "resize-detector",
    "vuetify"
  ]
}