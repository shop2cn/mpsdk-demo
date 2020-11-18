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
  },

  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  },

  gotoHome () {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=home'
    })
  },

  gotoCart() {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=cart'
    })
  },

  gotoProduct () {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=product&productId=p6400538'
    })
  },

  gotoOrderList() {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=orderList'
    })
  },

  gotoCategory() {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=category'
    })
  },

  gotoSearch() {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=search'
    })
  },

  gotoSpec() {
    wx.navigateTo({
      url: '/shop2cnPlugin/pages/navigator/navigator?page=spec&id=55'
    })
  },
});