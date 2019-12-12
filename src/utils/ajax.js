
import axios from "axios"
// import router from "@/router"
// import { BASE_URL } from "@/router/base-url"
// import { errorMsg } from "@/utils/msg";
// import { stringify } from "@/utils/helper";
import qs from 'qs'
// 创建axios实例
const v3api = axios.create({ // axios实例默认配置
    baseURL: process.env.BASE_API,
    timeout: 10000,
//     #config里面有这个transformRquest，这个选项会在发送参数前进行处理。
// #这时候我们通过Qs.stringify转换为表单查询参数
    transformRequest: [function (data) {
        data = qs.stringify(data);
        return data;
    }],
// #设置Content-Type
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
});

// 返回状态拦截，进行状态的集中判断
v3api.interceptors.response.use(
    //方案1
    response => {
        // const res = response.data;
        // if (res.success) {
            return Promise.resolve(response)
        // } else {
        //     // 内部错误码处理
        //     if (res.code === 1401) {
        //         alert(res.message || '登录已过期，请重新登录！')
        //         // router.replace({ path: `${BASE_URL}/login` })
        //     } else {
        //         // 默认的错误提示
        //         alert(res.message || '网络异常，请稍后重试！')
        //     }
        //     return Promise.reject(res);
        // }

    //方案2
    // async response => {
    //     // const res = response.data;
    //     // if (res.success) {
    //        return response

    },
    error => {
        if (/timeout\sof\s\d+ms\sexceeded/.test(error.message)) {
            // 超时
            alert('网络出了点问题，请稍后重试！')
        }
        if (error.response) {
            // http状态码判断
            switch (error.response.status) {
                // http status handler
                case 404:
                    alert('请求的资源不存在！')
                    break
                case 500:
                    alert('内部错误，请稍后重试！')
                    break
                case 503:
                    alert('服务器正在维护，请稍等！')
                    break
            }
        }
        return Promise.reject(error.response)
    }
)

// 处理get请求
const get = (url, params, config = {}) => v3api.get(url, { ...config, params })
// 处理delete请求，为了防止和关键词delete冲突，方法名定义为deletes
const deletes = (url, params, config = {}) => v3api.delete(url, { ...config, params })
// 处理post请求
const post = (url, params, config = {}) => v3api.post(url, params, config)
// 处理put请求
const put = (url, params, config = {}) => v3api.put(url, params, config)
export default {
    get,
    deletes,
    post,
    put
}
