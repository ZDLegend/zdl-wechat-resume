//index.js
//获取应用实例
const local = require('../../utils/local.js')

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      localDate: local
    })
  }
})
