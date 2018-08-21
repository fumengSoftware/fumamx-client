import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // 解决浏览器缓存请求
    if (config.method === 'get') {
      // 请求参数不是一个对象时
      if (typeof config.params !== 'object') {
        config.params = {}
      }
      Object.assign(config.params, {
        '_@time': new Date() * 1
      })
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)
