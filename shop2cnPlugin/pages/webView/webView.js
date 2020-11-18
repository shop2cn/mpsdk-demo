// shop2cnWebView.js
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