// shop2cnBuyerPluginWebView.js
Page({
  data: {
    url: ""
  },

  onLoad: function (options) {
    this.setData({
      url: decodeURIComponent(options.url)
    })
  }
})