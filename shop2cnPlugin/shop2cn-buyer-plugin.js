var navigateToPage = function (url) {
  wx.navigateTo({url})
}

var navigateToWebView = function(url) {
  var url = getWebViewPageURL(url)
  wx.navigateTo({url})
}

var redirectToPage = function(url) {
  wx.redirectTo({url})
}

var redirectToWebView = function(url) {
  var url = getWebViewPageURL(url)
  wx.redirectTo({url})
}

/*
* 返回宿主小程序的主页的路径给sdk，用于sdk的跳转
* 注意：函数名不能修改，只能修改返回路径
*/
var getHomePageURL = function () {
  // TODO: 需要用户修改为宿主小程序自己的首页路径
  return '/pages/index/index'
}

/*
* 返回宿主小程序的登陆页面的路径给sdk，用于sdk需要登陆态时的跳转
* 注意：函数名不能修改，只能修改返回路径
*/
var getLoginPageURL = function () {
  return '/shop2cnPlugin/pages/login/login'
}

/*
* 返回宿主小程序的web-view落地页的路径给sdk，用于sdk的跳转
* 注意：函数名不能修改，只能修改返回路径
*/
var getWebViewPageURL = function (url) {
  return `/shop2cnPlugin/pages/webView/webView?url=${encodeURIComponent(url)}`
}

/*
* 返回宿主小程序收银台的路径给sdk，用于支付小程序的跳转
* 注意：函数名不能修改，只能修改返回路径
*/
var getCashierPageURL = function (params) {
  return `/shop2cnPlugin/pages/cashier/cashier?extraData=${encodeURIComponent(JSON.stringify(params.extraData))}&appId=${params.appId}&path=${encodeURIComponent(params.path)}`
}

/*
* 返回宿主小程序的联系客服页面的路径给sdk，用于sdk需要登陆态时的跳转
* 如果不需要联系客服，可以返回空字符串
* 注意：函数名不能修改，只能修改返回路径
*/
var getCustomerServicePageURL = function () {
  return '/shop2cnPlugin/pages/customerService/customerService'
}

module.exports = {
  navigateToPage,
  navigateToWebView,
  redirectToPage,
  redirectToWebView,
  getHomePageURL,
  getLoginPageURL,
  getWebViewPageURL,
  getCashierPageURL,
  getCustomerServicePageURL
}