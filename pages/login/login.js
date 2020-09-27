var plugin = requirePlugin("shop2cn-buyer-plugin");
Page({
  data: {

  },
  onLoad: function (options) {
    plugin.login(12, 'name', 'avator', 1, () => {
      console.error('login')
      wx.navigateBack();
    })
  }
});