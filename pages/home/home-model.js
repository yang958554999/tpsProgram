/*
 * @Author: Zheng_Great
 * @Description:  
 * @Date: 2019-03-25 19:03:31
 */

import { Base } from '../../utils/base.js';
class Home extends Base {

    constructor() {
        super();
    }

    /*banner图片信息*/
    getBannerData(id,callback) {
        var param = {
            url: 'banner/'+ id,

            sCallback: function (res) {
                callback && callback(res.items);
            }
        };
        this.request(param);
    }

    /** 获取主题信息 */
    getThemeData(callback) {
        var param = {
            url: 'theme?ids=1,2,3',
            sCallback: function (data) {
                callback && callback(data);
            }
        };
        this.request(param);
    }
    
    /*首页部分商品*/
    getProductorData(callback) {
        var param = {
            url: 'product/recent',
            sCallback: function (data) {
                callback && callback(data);
            }
        };
        this.request(param);
    }

};

export { Home };