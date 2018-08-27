// pages/posts/post's.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onMusic: function() {
    console.log('start')
    wx.playBackgroundAudio({
      dataUrl: 'http://music.163.com/song/media/outer/url?id=108119.mp3',
      title: '夜夜夜夜-齐秦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000',
      success: function(){
        console.log('success')
      },
      fail:function(){
        console.log('fail')
      }
    })
  },
  onAddressChoose:function(){
    wx.chooseAddress({
      success:function(res){
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})