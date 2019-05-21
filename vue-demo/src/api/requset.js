import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
// import store from '../vuex/store.js'

var postUrl = '';
postUrl = 'http://192.168.20.49:8898';
// console.log(axios);
Axios.defaults.withCredentials = false; // 跨域请求开启
Axios.withCredentials = true;
Vue.prototype.$http = Axios; // 绑定ajax

let base = '';
let HTTP = Axios.create({
	baseURL: postUrl,
	headers:{
		Authorization:localStorage.getItem('Authorization')
	},
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        data = Qs.stringify(data)
        return data;
    }],
})
// 发送 post
export const post = params => {
    // let postUrl_ = postUrl + "webjk/" + params.method;
   
        let postUrl_ = params.method
  
    return HTTP.post(postUrl_, params.params)
}
export const put = params => {
    // let postUrl_ = postUrl + "webjk/" + params.method;
   
        let postUrl_ = params.method
  
    return HTTP.put(postUrl_, params.params)
}
export const DELETE = params => {
    // let postUrl_ = postUrl + "webjk/" + params.method;
   
        let postUrl_ = params.method
  
    return HTTP.DELETE(postUrl_, params.params)
}
// 发送 get
export const get = params => {
    // let postUrl_ = postUrl + "webjk/" + params.method;
   
        let postUrl_ = params.method
  
    return HTTP.get(postUrl_, params.params)
}

// 自定义Axios实例
const instance = Axios.create({
	
	// 配置api地址
	baseURL:postUrl,
	// 请求超时时间
	timeout: 100000,
	// 设置请求头
	 headers: {'content-type': 'application/json;charset=UTF-8'},
	// 设置数据格式化
	// transformRequest: [(data) => {
	// 	// data = qs.stringify(data)
	// 	data = JSON.stringify(data)
	// 	return data
	// }],
	// 携带cookie
	withCredentials: false
})
//配置请求头
// Axios请求拦截器
/* 请求拦截器 */
 
// axios.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
 
//     let token = Storage.localGet('token')
 
//     if (token) {
    
//         token = localStorage.getItem('Authorization') // 把token加入到默认请求参数中
 
//         config.headers.common['Authorization'] = token
 
//     }
 
//     return config
 
// }, function (error) {
 
//     return Promise.reject(error)
 
// })

