/*
 * @Author: Zheng_Great
 * @Description:  
 * @Date: 2019-03-25 18:45:22
 */
import { Home } from 'home-model.js';
var home = new Home(); //实例化 首页 对象
Page({
  data: {
    loadingHidden: false
  },
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function () {

    var id = 1;
    home.getBannerData(id,(res)=>{
      // console.log(res);
      //数据绑定
      this.setData({
        'bannerArr':res
      });
    });

    /*获取主题信息*/
    home.getThemeData((res) => {
      this.setData({
        themeArr: res
      });
    });

    /*首页部分商品*/
    home.getProductorData((data) => {
      this.setData({
        productsArr: data
      });
    });
  },

})


