// shop2cnCashier.js
var plugin = requirePlugin("shop2cn-buyer-plugin");

Page({
  data: {
    time: {
      h: "00",
      m: "00",
      s: "00"
    },
  },
  onLoad: function (options) {
    console.error(options)
    var extraData = JSON.parse(decodeURIComponent(options.extraData || {}))
    var appId = options.appId || ''
    var path = decodeURIComponent(options.path || '')
    this.setData({
      appId,
      path,
      extraData
    })
  },
   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.extraData && this.data.extraData.payDeadLineTime) {
        this.startCountDown(this.data.extraData.payDeadLineTime)
    }
    this.checkPayResult()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if (this.timer) clearInterval(this.timer);
  },
  startCountDown(EndTimeStamp) {
    var now = Date.parse(new Date());
    var ET = parseInt(EndTimeStamp - now) / 1000;  
    const self = this;
    if (self.timer) clearInterval(self.timer);
    if (ET <= 0) {
        return
    }
    this.setData({
        timeInterval: ET
    });
    const NT = self.getLeftTime(ET);
    self.setData({
      time: {
        h: NT.h,
        m: NT.m,
        s: NT.s
      }
    });
    ET -= 1;
    self.timer = setInterval(function() {
        if (ET > 0 || ET === 0) {
          const NT = self.getLeftTime(ET);
          self.setData({
            time: {
              h: NT.h,
              m: NT.m,
              s: NT.s
            }
          });
          ET -= 1;
        } else {
          if (self.timer) clearInterval(self.timer);
        }
    }, 1000);
  },

  formatNum(num) {
    return num > 9 ? num + '' : `0${num}`;
  },
  
  getLeftTime(leftTime) {
    leftTime = leftTime;
    let h = this.formatNum(Math.floor(leftTime / 3600)),
      m = this.formatNum(Math.floor((leftTime - h * 3600) / 60)),
      s = this.formatNum(Math.floor(leftTime - h * 3600 - m * 60));
    return { h, m, s };
  },

  pay () {
    var _this = this
    wx.navigateToMiniProgram({
      appId: this.data.appId,
      path:  this.data.path,
      extraData: this.data.extraData,
      envVersion: 'release',
      success(res) {
          // 打开成功
          console.log('打开成功：' + JSON.stringify(res))
        _this.setData({
          needCheckPayResult: true
        })
      },
      fail(res) {
          console.log('打开失败：' + JSON.stringify(res))
      }
    })
  },

  checkPayResult() {
    if (!this.data.needCheckPayResult) {
      return
    }
    var _this = this
    setTimeout(() => {
      _this.requesPayResult()
    }, 3000);
  },

  requesPayResult() {
    plugin.fetch('payResult', {orderId: this.data.extraData.orderId},  data => {
      if (data && data.pay) {
        // 支付成功
        plugin.navigate('orderList')
      } else {
        //未支付
      }
    }, (code, msg) => {

    })
  }
});