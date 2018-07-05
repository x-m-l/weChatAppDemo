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
  }
})
