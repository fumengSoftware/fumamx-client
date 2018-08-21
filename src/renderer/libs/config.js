/**
 * 不同环境接口域名不同
 */
let _domain = '' // 主域名
let _socketUrl = '' // 消息推送
let _uploadUrl = '' // 文件上传地址
let _imgBaseUrl = '' // 图片显示url
let _downloadBaseUrl = '' // 文件下载路径
let _hostName = '' // 域名
if (process.env.NODE_ENV === 'development') {
  // 开发阶段
  _domain = 'http://fumamx:9000'
  _socketUrl = 'https://abus.laifuyun.com'
  _uploadUrl = 'https://aapi.laifuyun.com/v2/uploadTest'
  _imgBaseUrl = 'https://aapi.laifuyun.com/v2/image/'
  _downloadBaseUrl = 'https://aapi.laifuyun.com/v2/download/'
} else if (process.env.NODE_ENV === 'production') {
  if (process.env.STAGE_ENV === 'test') {
    _domain = 'https://alph.laifuyun.com'
    _socketUrl = 'https://abus.laifuyun.com'
    _uploadUrl = 'https://aapi.laifuyun.com/v2/uploadTest'
    _imgBaseUrl = 'https://aapi.laifuyun.com/v2/image/'
    _downloadBaseUrl = 'https://aapi.laifuyun.com/v2/download/'
  } else if (process.env.STAGE_ENV === 'sim') {
    _domain = 'https://alph.laifuyun.com'
    _socketUrl = 'https://abus.laifuyun.com'
    _uploadUrl = 'https://aapi.laifuyun.com/v2/uploadTest'
    _imgBaseUrl = 'https://aapi.laifuyun.com/v2/image/'
    _downloadBaseUrl = 'https://aapi.laifuyun.com/v2/download/'
  } else if (process.env.STAGE_ENV === 'prod') {
    _domain = 'https://fumamx.com'
    _socketUrl = 'https://bus.fumamx.com'
    _uploadUrl = 'https://up.fumamx.com/v2/uploadTest'
    _imgBaseUrl = 'https://up.fumamx.com/v2/image/'
    _downloadBaseUrl = 'https://up.fumamx.com/v2/download/'
  }
}

/**
 * 环境判断
 */
export const isDev = process.env.NODE_ENV === 'development'

/**
 * 域名环境
 */
export const domain = _domain

/**
 *
 */
export const hostName = _hostName

/**
 * 接口请求地址
 */
export const baseURL = domain + '/pcapi/'

/**
 * socketUrl
 */
export const socketUrl = _socketUrl

/**
 * 文件上传服务器接口
 */
export const uploadUrl = _uploadUrl

/**
 * 图片展示url前缀
 */
export const imgBaseUrl = _imgBaseUrl

/**
 * 图片初始化显示
 */
export const initImg = '/static/images/initImg.png'

/**
 * 图片加载失败，显示的默认图片
 */
export const errorImg = initImg

/**
 * 文件下载url前缀
 */
export const downloadBaseUrl = _downloadBaseUrl

/**
 * jsonp默认选项
 */
export const jsonpOption = {
  param: 'jsonpCallback'
}

/**
 * 路由风格
 * hash/history
 */
export const routerMode = 'hash'

/**
 * 接口成功统一返回状态
 */
export const RES_OK = '0'

/**
 * 异步接口失败统一错误提示
 */
export const errorTitle = '服务器异常，请重试'

/**
 * 钉钉扫码登录
 */
export const dingdingLongin =
    'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoaf8ncfp4yfzeqz898&response_type=code&scope=snsapi_login&state=STATE&redirect_uri='

/**
 * 登录过期时间
 */
export const cookieConfig = {
  expires: 7,
  path: ''
}

/**
 * 企业Token key
 */
export const accessToken = 'accessToken'

/**
 * 个人Token key
 */
export const individualAccessToken = 'individualAccessToken'
