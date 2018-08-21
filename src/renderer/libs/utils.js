import CryptoJS from 'crypto-js'

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  try {
    window.store.set(name, content)
  } catch (e) {
    console.log('setStore error!')
  }
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  try {
    return window.store.get(name)
  } catch (e) {
    console.log('getStore error!')
    return null
  }
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  try {
    window.store.remove(name)
  } catch (e) {
    console.log('removeStore error!')
  }
}

/**
 * 清空localStorage
 */
export const clearStore = () => {
  try {
    window.store.clearAll()
  } catch (e) {
    console.log('clearStore error!')
  }
}

/**
 * 获取cookie
 */
export const getCookie = name => {
  try {
    return window.Cookies.get(name)
  } catch (e) {
    console.log('getCookie error!')
    return null
  }
}

/**
 * 设置cookie
 * 默认0.5天过期
 */
export const setCookie = (name, value, option = {}) => {
  try {
    window.Cookies.set(name, value, option)
  } catch (e) {
    console.log('setCookie error!')
  }
}

/**
 * 删除cookie
 */
export const removeCookie = (name, option = {}) => {
  try {
    window.Cookies.remove(name, option)
  } catch (e) {
    console.log('removeCookie error!')
  }
}

/**
 * 加密
 */
export const encrypt = data => {
  var ciphertext = CryptoJS.AES.encrypt(data, 'laifuyun.com')
  return ciphertext.toString()
}

/**
   * 解密
   */
export const decrypt = data => {
  var bytes = CryptoJS.AES.decrypt(data, 'laifuyun.com')
  var plaintext = bytes.toString(CryptoJS.enc.Utf8)
  return plaintext
}
