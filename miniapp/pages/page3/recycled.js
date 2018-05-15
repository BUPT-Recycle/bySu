// pages/page3/recycled.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    empty:"static/img/emptystar.png",
    half:"static/img/halfstar.png",
    full: "static/img/fullstar.png",
    */
    stars: [0, 1, 2, 3, 4],
    empty: "../../static/img/emptystar.png",
    half: "../../static/img/halfstar.png",
    full: "../../static/img/fullstar.png",
    key: 0,//评分
  },
  //点击左边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击右边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
/*
  pingfenxing:function (pingfen){
    var that = this;
    nums=[];
    if((pingfen/0.5)%2==0){
      for(var i=0;i<5;i++){
        if(i<pingfen){
          nums.push(data.full);
        }
        else{
          nums.push(data.empty);
        }
      }
    }
    else{
      for(var i=0;i<5;i++){
        if(i<pingfen-0.5){
          nums.push(data.full);
        }
        else if(i == (pingfen-0.5)){
          nums.push(data.half);
        }
        else{
          nums.push(data.empty);
        }
      }
    }
    return num;
  },
  module:{pingfen:pingfenxing},
*/
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
  
  }
})