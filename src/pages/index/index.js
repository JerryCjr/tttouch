Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.refresh();
  },

  getRandomColor() {
    return '#' + (Math.random() * 0xffffff << 0).toString(16);
  },

  refresh() {
    const fetch = [];
    for (let index = 0; index < 10; index++) {
      const element = {
        id: index,
        tsX: 0,
        x: 0,
        y: 0,
        color: this.getRandomColor()
      };
      fetch.push(element);
    };

    this.setData({
      list: fetch.reverse()
    });
  },

  tshandler(e) {
    // console.log(e);
    const target = e.target.id;
    const tsX = e.changedTouches[0]['pageX'];
    const key = `list[${target}].tsX`;
    this.setData({
      [key]: tsX
    });
  },

  tmhandler(e) {
    // console.log(e);
  },

  tehandler(e) {
    // console.log(e);
    const target = e.target.id;
    const teX = e.changedTouches[0]['pageX'];
    const tsX = this.data.list[target].tsX;
    const key = `list[${target}].x`;
    const offset = teX - tsX;
    // console.log('start: ', tsX);
    // console.log('end: ', teX);
    console.log('offset: ', offset);

    if (offset < -100) {
      console.log('towards left');
      this.setData({
        [key]: -1000
      });
    } else if (offset > 100) {
      console.log('towards right');
      this.setData({
        [key]: 1000
      });
    } else {
      this.setData({
        [key]: 0
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
