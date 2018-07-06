// pages/sellProduct/sellProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    serviceList:[
      { id: '1', name: '吴亦凡', sale: '22417', unitPrice: '645' },
      { id: '2', name: 'kris', sale: '8746', unitPrice: '487' }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  clickDate:function(){
    this.setData({
      flag : true
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindDate: function (e){
    if(e!==''){
      this.setData({
        flagDate:true
      })
    }else{
      flagDate:false
    }
  },
  bindMoney: function(e){
    if (e !== '') {
      this.setData({
        flagMoney: true
      })
    } else {
      flagMoney: false
    }
  }
})