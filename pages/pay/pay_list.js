// pages/pay/pay_list.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    personId: '',
    buttonText: '请选择支付方式',
    buttonLoading: false,
    buttonDisabled: true,
    id: '',
    items: [
      { id: '1', text: '收银台', msg: '顾客支付现金', src: '../../utils/cashier.jpg' },
      { id: '3', text: '微信支付', msg: '点击进入，顾客扫码支付', src: '../../utils/wechat_2.png' },
      { id: '2', text: '支付宝', msg: '发送短信，顾客点击支付', src: '../../utils/alipay.png' },
      { id: '4', text: '微信代付', msg: '点击进入，代顾客支付', src: '../../utils/wechat_2.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.onLaunch()
    this.setData({
      personId: wx.getStorageSync('personId')
    })
  },

  onHide: function () {
    this.setData({
      buttonLoading: false
    })
  },

  cashierPay: function () {
    wx.navigateTo({
      url: 'cashier/cashier'
    })
  },

  wechatPay: function () {
    wx.navigateTo({
      url: 'wechat/wechat'
    })
  },

  radioChange: function (e) {
    let find = this.data.items.find((item) => {
      return item.id === e.detail.value
    })
    this.setData({
      buttonText: find.text,
      buttonDisabled: false,
      id: find.id
    })
  },
  
  postPayment: function () {
    this.setData({
      buttonLoading: true
    })
    let data = this.data
    if (data.id === '1') {
      this.cashierPay()
    } else if (data.id === '3') {
      this.wechatPay()
    }
  },

  choosePayType: function (e) {
    let find = this.data.items.find((item) => {
      return item.id === e.currentTarget.dataset.id
    })
    this.setData({
      buttonText: find.text,
      buttonDisabled: false,
      id: find.id
    })
  }
})