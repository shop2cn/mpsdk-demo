//app.js
App({
  onLaunch: function () {
    var plugin = requirePlugin('shop2cn-buyer-plugin')
    plugin.init('APPID', 'APPSECRET')
    plugin.login(12)
  }
})