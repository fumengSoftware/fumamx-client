import Vue from 'vue'
import $ from 'jQuery'
import Cookies from 'js-cookie'
import store from 'store'

import * as config from './config'
import api from './api'
import * as utils from './utils'

window.$ = $
window.Cookies = Cookies
window.store = store
/**
 * 全局配置
 */
Vue.prototype.Global = {
  'config': config,
  'api': api,
  'utils': utils
}
