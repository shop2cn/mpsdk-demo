var plugin = requirePlugin("shop2cn-buyer-plugin");
Page({
  onLoad: function () {
  },

  gotoHome () {
    plugin.navigate('home')
  },

  gotoCart() {
    plugin.navigate('cart')
  },

  gotoProduct () {
    plugin.navigate('product', {productId: 'p4862730'})
  },
  
  gotoMoneyOff() {
    plugin.navigate('moneyoff')
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

  gotoMoneyOff() {
    plugin.navigate('moneyoff')
  },

});