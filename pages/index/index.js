var plugin = requirePlugin("shop2cn-buyer-plugin");
Page({
  data: {
    items: [],
    currentItem: 0,
    extraData: {
      orderId: 1333,
      independenceMiniAppType: 1
    },
    showPayType: false
  },
  onLoad: function () {
    plugin.init('111')
  },

  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  },

  gotoHome () {
    plugin.navigate('home')
  },

  gotoCart() {
    plugin.navigate('cart')
  },

  gotoProduct () {
    plugin.navigate('product', {productId: 'p6400538'})
  },

  gotoOrderList() {
    plugin.navigate('orderList')
  },

  gotoCategory() {
    plugin.navigate('category')
  },

  gotoSearch() {
    plugin.navigate('search')
  },

  gotoSpec() {
    plugin.navigate('spec', {id: 55})
  },

  goToUsercenter () {
    wx.navigateTo({
      url: "plugin://shop2cn-buyer-plugin/usercenter?mchId=500002398&accessToken=98393949DC88F83A5902A42969742505708AD2CC7C23E7E8C974A65BF0728B8089C98708C05FCB4F9DA845FB32082EF0B1988A2AC5F77EDC"
    })
  },
  commonWebView () {
    var url = encodeURIComponent(`https://m.shop2cn.com/shop/500002398/integral`)
    wx.navigateTo({
      url: "plugin://shop2cn-buyer-plugin/commonWebView?url=p4827914&mchId=500002398"
    })
  },
  login () {
    wx.navigateTo({
      url: "plugin://shop2cn-buyer-plugin/login"
    })
  }
});