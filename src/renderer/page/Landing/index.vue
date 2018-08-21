<template>
  <div class="Landing">
    <div class="iconBox" :class="windowClass">
      <div class="Close" @click="Close()"><i class="iconfont icon-close-bold"></i></div>
      <div class="scale" @click="scale()"><i class="iconfont icon-minus"></i></div>
    </div>
    <!-- 登录表单 -->
    <div class="LoginBox" v-if="LoginBox">
      <div class="logo" style="-webkit-app-region: drag">
        <i class="iconfont icon-logo"></i>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="70px" size="small">
        <el-form-item :label="$t('mxpcweb.login.1528183907374')" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item :label="$t('mxpcweb.login.1528184459617')" prop="pass">
          <el-input v-model="ruleForm.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item :label="$t('mxpcweb.login.1528184680089')" prop="language">
          <el-select v-model="ruleForm.language" :placeholder="$t('mxpcweb.login.1528184757730')" @change="languageLabelChange()" style="width:100%;">
            <el-option v-for="item in languageList" :key="item.dictItemCode" :label="item.itemName" :value="item.itemValue"></el-option>
          </el-select>
        </el-form-item>
        <el-checkbox v-model="rememberPassword" @change="isRememberPassword()"><span style="font-size: 12px;">{{ $t('mxpcweb.login.1528185072847') }}</span></el-checkbox>
        <div class="RetrievePass" @click="RetrievePass()">{{ $t('mxpcweb.login.1528185215760') }}</div>
        <br/><br/>
        <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">{{ $t('mxpcweb.login.1528183839984') }}</el-button>
      </el-form>
    </div>
    <!-- 选择企业 -->
    <div class="companySelect" v-if="companySelect">
      <p class="title">{{ $t('mxpcweb.login.1528784469407') }}</p>
      <div class="companyList MXscroll">
        <el-radio-group v-model="ctId">
          <div v-for="(item,index) in companyList" :key="index" v-if="item.status === 1">
            <el-radio :label="item.ctId" class="item">{{ item.corpName.length > 16 ? item.corpName.substr(0,16) + '...' : item.corpName }}</el-radio>
          </div>
        </el-radio-group>
      </div>
      <el-button type="primary" class="enter" @click="enter()">{{ $t('mxpcweb.login.1528186160942') }}</el-button>
    </div>
  </div>
</template>

<script>
  const { ipcRenderer, shell } = require('electron')
  // const { ipcRenderer, shell } = eval('require("electron")')
  const isWin = navigator.userAgent.indexOf('Win') !== -1
  export default {
    name: 'Landing',
    data () {
      let _this = this
      return {
        windowClass: '',
        ruleForm: {
          user: '',
          pass: '',
          language: 'zh-cn'
        },
        rules: {
          user: [
            { required: true, message: _this.$t('mxpcweb.login.1528695896074'), trigger: 'blur' }
          ],
          pass: [
            { required: true, message: _this.$t('mxpcweb.login.1528695967186'), trigger: 'blur' }
          ],
          language: [
            { required: true, message: _this.$t('mxpcweb.login.1528696000842'), trigger: 'blur' }
          ]
        },
        languageList: [],
        rememberPassword: false,
        LoginBox: true,
        companySelect: false,
        companyList: [],
        auth: {},
        ctId: 0
      }
    },
    created () {
      if (isWin) {
        this.windowClass = 'winClass'
      }
      let { getStore, decrypt } = this.Global.utils
      if (getStore('isRememberPassword')) {
        this.ruleForm.user = getStore('user')
        this.ruleForm.pass = decrypt(getStore('pass'))
        this.ruleForm.language = getStore('language')
        this.$setI18nLanguage(this.ruleForm.language)
        this.rememberPassword = true
      }
      this.languageChange()
    },
    mounted () {
      let { setStore } = this.Global.utils
      setStore('language', this.ruleForm.language)
    },
    methods: {
      Close () {
        ipcRenderer.send('window-login', 'setSkipTaskbar')
      },
      scale () {
        ipcRenderer.send('window-login', 'window-min')
      },
      // 语言下拉
      languageChange () {
        let _this = this
        this.$http.get(this.Global.config.baseURL + this.Global.api.v2.dictionary + 'locallanguage', { params: {} }).then((res) => {
          if (res.data.code.toString() === _this.Global.config.RES_OK) {
            this.languageList = res.data.data
          }
        })
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.rememberPassword) {
              let { setStore, encrypt } = this.Global.utils
              setStore('isRememberPassword', this.rememberPassword)
              setStore('user', this.ruleForm.user)
              setStore('pass', encrypt(this.ruleForm.pass))
              setStore('language', this.ruleForm.language)
            }
            this._auth(this.ruleForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      _auth (data) {
        return new Promise((resolve, reject) => {
          this.$http.post(this.Global.config.baseURL + this.Global.api.v2.auth, data).then((res) => {
            if (res.data.code.toString() === this.Global.config.RES_OK) {
              let { companies } = res.data.data
              this.auth = res.data.data
              if (companies.length > 0) {
                this.resetForm('ruleForm')
                this.LoginBox = false
                this.companySelect = true
                this.companyList = companies
              }
            } else {
              this.$message.error(res.data.msg)
            }
          })
        })
      },
      enter () {
        let { encrypt } = this.Global.utils
        let { getStore } = this.Global.utils
        var href = `${this.Global.config.domain}/client/clientEnter.html?auth=${encrypt(JSON.stringify(this.auth))}&ctId=${this.ctId}&language=${getStore('language')}`
        ipcRenderer.send('window-mainsys', 'createMainSysWindow', href)
      },
      languageLabelChange () {
        let { setStore } = this.Global.utils
        setStore('language', this.ruleForm.language)
        this.$setI18nLanguage(this.ruleForm.language)
      },
      RetrievePass () {
        shell.openItem(this.Global.config.domain)
      },
      isRememberPassword () {
        let { setStore } = this.Global.utils
        setStore('isRememberPassword', this.rememberPassword)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import './zh-cn.less';
@import './en.less';
</style>
