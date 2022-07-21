//地址
const host = "http://127.0.0.1:9001/api/goods";
const devhost = "http://127.0.0.1:9001/api/goods";


// const host = "http://localhost:8009/api";
function request(url, method, data, showLoad, header = {}) {
	console.log(url + " - postData:", data);
	let pathUrl =   host + url
	return new Promise((resolve, reject) => {
		uni.request({
			url: pathUrl,
			method: method,
			data: data,
			header: {
				 "content-type": "application/x-www-form-urlencoded" // 默认值
			},
			success: function(res) {
				console.log(url + " - resultData", res.data);
				if(url == "/index/playbill"){
					resolve(res.data);
					return 
				}
				if (res.data.statecode == "0") {
					resolve(res.data);
				} else {
					reject(res.data.message);
				}
			},
			fail: function(res) {
				if(res.statusCode != '200' && url != "/index/errorlog"){
					postErrLog(url,data,res.statusCode,res.data)
				}
				reject(res.data.message);
			},
			complete: function() {}
		});
	});
}

function get(url, data, showLoad = true) {
	return request(url, "GET", data, showLoad);
}

function post(url, data, showLoad = true) {
	return request(url, "POST", data, showLoad);
}
//接口调用
const get_index_show = (display_position) => {
	let postData = {
		display_position: display_position
	}
	return post('/get_index_show', postData)
}

const get_index_banner = (display_position) => {
	let postData = {
		display_position: display_position
	}
	return post('/get_index_banner', postData)
}

//向外暴露
export default{
	get_index_show,// //获取首页数据
	get_index_banner, //获取首页banner
}