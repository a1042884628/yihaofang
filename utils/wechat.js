var jweixin = require('../components/jweixin-module/index.js');
import fmapi from "../common/fmapi.js"
export default {
    //判断是否在微信中  
    isWechat: function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/micromessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },
    //初始化sdk配置  
    initJssdk: function(callback, url) {
		fmapi.get_weixin_config(url).then(res=>{
			let result = res.data
			jweixin.config({
			    debug: false,
			    appId: result.appId,
			    timestamp: result.timestamp,
			    nonceStr: result.nonceStr,
			    signature: result.signature,
			    jsApiList: [
			        'checkJsApi',
			        'updateAppMessageShareData',
			        'updateTimelineShareData',
					'getLocation',
					'openLocation',
					'chooseWXPay'
			    ]
			});
			if (callback) {
			    callback();
			}
		})
    },
    //在需要自定义分享的页面中调用  
    share: function(data, url) {
        url = url ? url : window.location.href;
        if (!this.isWechat()) {
            return;
        }
        //每次都需要重新初始化配置，才可以进行分享  
        this.initJssdk(function() {
            jweixin.ready(function() {
                var shareData = {
                    title: data && data.title ? data.title : '',
                    desc: data && data.desc ? data.desc : '',
                    link: url,
                    imgUrl: data && data.imgUrl ? data.imgUrl : '',
                    success: function(res) {
                        
                    },
                    cancel: function(res) {
						
					}
                };
                //分享给朋友接口  
                jweixin.updateAppMessageShareData(shareData);
                //分享到朋友圈接口  
                jweixin.updateTimelineShareData(shareData);
            });
        }, url);
    },
	getLocation:function (callback){
		this.initJssdk(function() {
			jweixin.ready(function() {
				jweixin.getLocation({
				  type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				  success: function (res) {
				    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				    var speed = res.speed; // 速度，以米/每秒计
				    var accuracy = res.accuracy; // 位置精度
					console.log(latitude);
					console.log(longitude);
					callback(res)
				  }
				});
			})
		
		},window.location.href)

	},
	
	openLocation:function(location){
		jweixin.openLocation({
		  latitude: location.latitude, // 纬度，浮点数，范围为90 ~ -90
		  longitude: location.longitude, // 经度，浮点数，范围为180 ~ -180。
		  name: '', // 位置名
		  address: '', // 地址详情说明
		  scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
		  infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
		})
	},
	wxWebPay:function(params,callback){	
		this.initJssdk(function() {
			jweixin.ready(function() {
				jweixin.chooseWXPay({
				  timestamp: params.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				  nonceStr:  params.nonceStr, // 支付签名随机串，不长于 32 位
				  package: params.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				  signType: params.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				  paySign: params.paySign, // 支付签名
				  success: function (res) {
				    // 支付成功后的回调函数
					callback(res)
				  }
				});
			},window.location.href)

		})

	}
}