<template>
  <div class="SelectCompanie">
    <div class="title">选择你要进入的企业</div>
    <ul class="list MXscroll">
      <li class="li" v-for="(item,index) in companies" :key="index">
          <el-radio v-model="corpIndex" :label="index">{{ item.corpName }}</el-radio>
      </li>
    </ul>
    <el-button type="primary" size="small" class="toCompanie" @click="toCompanie">进入企业</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import aesjs from 'aes-js'
const { remote, ipcRenderer } = require('electron')
const { BrowserWindow } = remote
export default {
  name: 'SelectCompanie',
  props: {
    companies: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      corpIndex: 0
    }
  },
  computed: {
    ...mapGetters(['auth'])
  },
  created () {
    console.log(this.auth)
  },
  mounted () {

  },
  components: {},
  methods: {
    async toCompanie () {
      // 选择的企业
      let company = JSON.stringify(this.companies[this.corpIndex])
      // 数据量大删除companies
      delete this.auth.companies
      // 登录信息
      let auth = JSON.stringify(this.auth)

      console.log(auth)
      console.log(company)

      // 加密
      auth = aesjs.utils.utf8.toBytes(auth) + ''
      company = aesjs.utils.utf8.toBytes(company) + ''

      // console.log(auth)
      // console.log(company)

      // 解密
      // var authArray = new Uint8Array(auth.split(','))
      // console.log(aesjs.utils.utf8.fromBytes(authArray))

      var href = `${this.Global.domain}/static/clientEnter.html?auth=${auth}&company=${company}`
      let win = new BrowserWindow({ width: 1000, height: 620 })
      win.on('close', function () {
        win = null
      })
      win.loadURL(href)
      win.show()
      win.maximize()
      // 关闭主窗口
      ipcRenderer.send('window-close')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url('~@/assets/less/mixins.less');
.SelectCompanie {
    width: 380px;
    padding:0 20px 20px 20px;
    position: absolute;
    right: 0px;
    top: 120px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    .title{
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .list{
      width: 100%;
      margin-top: 15px;
      max-height: 200px;
      overflow: auto;
      display: block;
      margin-bottom: 10px;
      .li{
          background: #eee;
          margin-bottom: 8px;
          padding: 8px 15px;
          border-radius: 5px;
          color: #555;
      }
    }
    .toCompanie{
      width: 100%;
    }
}
</style>
