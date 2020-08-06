var navigateToPayMP = function (options) {
  wx.navigateToMiniProgram(options)
}

var navigateToPage = function (options) {
  wx.navigateTo(options)
}

var navigateToWebView = function (url) {
  wx.navigateTo({
    url: `/pages/shop2cnBuyerWebView/shop2cnBuyerWebView?url=${encodeURIComponent(url)}`
  });
}

var navigateToHome = function () {

}

module.exports = {
  navigateToPayMP,
  navigateToPage,
  navigateToWebView,
  navigateToHome
}