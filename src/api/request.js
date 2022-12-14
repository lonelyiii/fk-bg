import axios from 'axios'
import { message } from 'ant-design-vue';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 10000,
    

  });

  instance.interceptors.request.use(function (config) {
    message.loading({
      content: '加载中...',
      key:'x'
      
    });

    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
  
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    message.destroy()
    return response.data;
  }, function (error) {
    
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    message.info('网络错误')
    

    setTimeout(()=>{
      message.destroy()
    },1000)
    return Promise.reject(error);
  });

  export default instance