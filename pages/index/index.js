//index.js
//获取应用实例
import LocalData from '../../utils/local.js'
import Cain from '../../utils/Cain.js'

Page({
  data: {
    overlay: true
  },
  onLoad: function () {
    this.setData(LocalData)
    wx.hideLoading()
    this.setData({ 'overlay': false })
  },
  touchStart: function (t) {
    this.setData({
      startY: t.changedTouches[0].clientY
    })
  },
  touchEnd: function (t) {
    let e = this, n = this.data.view;
    this.setData({
      endY: t.changedTouches[0].clientY
    });

    let a = t.changedTouches[0].clientY - this.data.startY;
    if (a < -50) {

    } else if (a > 50) {

    }
  },
  onShow: function () {
    let t = this;
    setTimeout(function () {
          t.setData({
            bannerBg: "animated fadeIn",
          })
        },
        1e3), setTimeout(function () {
          t.setData({
            titleResume: "animated bounceIn"
          })
        },
        1500), setTimeout(function () {
          t.setData({
            enName: "animated bounceIn"
          })
        },
        1800), setTimeout(function () {
          t.setData({
            title: "animated lightSpeedIn"
          })
        },
        1900)
    this.showAnimated()
  },
  onHide: function () {
    this.setData({
      bannerBg: "",
      titleResume: "",
      enName: "",
      title: "",
    })
  },
  //打开/关闭手风琴项
  toggleAccordionItem(e) {
    let item = this.data.workList[e.currentTarget.dataset.index];

    item.isShow = !item.isShow

    this.setData({
      workList: this.data.workList
    })
  },
  //设置剪切板内容
  setClipboard(e) {
    Cain.setClipboard(e.currentTarget.dataset.content)
  },
  //打电话
  callPhone() {
    Cain.callPhone(this.data.baseInfo.mobilePhone)
  },
  showAnimated: function () {
    var t = this;
    setTimeout(() => {
      t.setData({
        bottom: "animated slideInUp"
      })
    }, 2e3);
    setTimeout(function () {
      t.setData({
        bottom_one: "animated slideInUp"
      })
    }, 2100);
    setTimeout(function () {
      t.setData({
        bottom_two: "animated slideInUp"
      })
    }, 2200);
    setTimeout(function () {
      t.setData({
        bottom_three: "animated slideInUp"
      })
    }, 2300),
        setTimeout(function () {
          t.setData({
            bottom_four: "animated slideInUp"
          })
        }, 2400),
        setTimeout(function () {
          t.setData({
            bottom_one: "bottom-4s-move"
          })
        }, 3100),
        setTimeout(function () {
          t.setData({
            bottom_two: "bottom-3s-move"
          })
        }, 3200),
        setTimeout(function () {
          t.setData({
            bottom_three: "bottom-2s-move"
          })
        }, 3300),
        setTimeout(function () {
          t.setData({
            bottom_four: "bottom-1s-move"
          })
        }, 3400)
  }
})
