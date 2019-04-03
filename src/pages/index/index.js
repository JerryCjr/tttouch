Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    tsX: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log('onLoad');
  },

  tshandler(e) {
    // console.log(e);
    const tsX = e.changedTouches[0]['pageX'];
    this.setData({
      tsX
    });
  },

  tmhandler(e) {
    // console.log(e);
  },

  tehandler(e) {
    // console.log(e);
    const teX = e.changedTouches[0]['pageX'];
    const offset = teX - this.data.tsX;

    // console.log('start: ', this.data.tsX);
    // console.log('end: ', teX);
    console.log('offset: ', offset);

    if (offset < -100) {
      console.log('towards left');
      this.setData({
        x: -1000,
        y: 0
      });
    } else if (offset > 100) {
      console.log('towards right');
      this.setData({
        x: 1000,
        y: 0
      });
    } else {
      this.setData({
        x: 0,
        y: 0
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  customData: {}
});
