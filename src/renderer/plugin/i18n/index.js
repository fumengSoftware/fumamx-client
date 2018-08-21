import Vue from 'vue'
import VueI18n from 'vue-i18n'
import dateTimeFormats from './dateTimeFormats'

Vue.use(VueI18n)

// 读取服务返回语言配置。
let locale = 'zh-cn'

// 实例化语言插件
let i18n = new VueI18n({
  locale: locale,
  messages: window.LANGUAGE,
  dateTimeFormats
})
/**
 * 设置语言
 */
let setI18nLanguage = lang => {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  document.querySelector('body').setAttribute('class', lang)
}
setI18nLanguage(locale)
Vue.prototype.$setI18nLanguage = setI18nLanguage

/**
 * 对整个站点语言数据做异步加载
 */
window.i18nSetMessages = function (data) {
  i18n.setLocaleMessage(locale, Object.assign(i18n[locale], data))
}

export default i18n
