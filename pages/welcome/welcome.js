const app = getApp()

import { request } from '../../utils/util.js';
import regeneratorRuntime from '../../utils/runtime.js';
import { pannellum } from '../../utils/pannellum.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAvatar:'',
    nickName:'',
    iframeSrc:''
  },
  onTap: function() {
    // wx.navigateTo({
    //   url: '../posts/post',
    // })

    wx.redirectTo({
      url: '../posts/post',
    })
  },
  checkSession: () => {
    wx.checkSession({
      success: function (res) { 
        console.log('success')
      },
      fail: function (res) { 
        console.log('fail')
       },
      complete: function (res) { 
        console.log('complete')
       },
    })
  },
  
  async onHttp () {
    await this.http()
  },
  
  http: function(){
    // request('weapp/demo').then((res)=>{
    //   console.log('123',res)
    // })
  },

  setView: function(){
    let el = wx.createSelectorQuery().select('#panorama')
    let window = wx.createSelectorQuery().select('window')
    let document = wx.createSelectorQuery().select('document')
    pannellum(window, document).viewer(el, {
      "type": "equirectangular",
      "panorama": "https://pannellum.org/images/alma.jpg"
    });
  },

  setSrc: function(){
    let title = 'testing';
    let pic = 'https://gw.alicdn.com/tfs/TB1e2gMJhSYBuNjSspjXXX73VXa-4096-2048.jpg';
    let src = `https://cdn.pannellum.org/2.4/pannellum.htm?panorama=${pic}&autoLoad=true&title=${title}`
    this.setData({
      iframeSrc: src
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let info = app.globalData.userInfo 
    // avatarUrl,nickName
    this.setData({
      userAvatar: info.avatarUrl,
      nickName: info.nickName
    })
    this.checkSession()

    this.onHttp()
    this.setSrc()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //this.setView()
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
    console.log('onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('unload')
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