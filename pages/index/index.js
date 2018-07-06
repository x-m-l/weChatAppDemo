//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '小程序练习',
    message: '微微一笑很倾城'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
