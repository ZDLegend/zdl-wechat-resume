//index.js
//获取应用实例
import Cain from '../../utils/Cain.js'
import util from '../../utils/util.js'

Page({
  data: {
    overlay: true
  },
  onLoad: function () {
    util.getInfo(this.precessData)
    wx.hideLoading()
    this.setData({ 'overlay': false })
  },
  precessData: function (res) {
    let info = res.data[0]
    this.setData(info);
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let shareObj = {
      title: "我的简历查看",
      path: 'pages/index/index',
      success(res) {
        // 转发成功之后的回调
      },
      fail(res) {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中  为详细失败信息
            wx.showToast({
                title: "哎呀，失败了",
                icon: "none"
            })
        }
      },
      complete() {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    return shareObj;
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
