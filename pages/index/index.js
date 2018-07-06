//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    personId: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    app.onLaunch()
    this.setData({
      personId: wx.getStorageSync('personId')
    })
  },
  goBaidu: function () {
    wx.navigateTo({
      url: '../q/q', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})
