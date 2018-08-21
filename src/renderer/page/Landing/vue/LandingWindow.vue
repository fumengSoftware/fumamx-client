<template>
  <div class="LandingWindow">
    <ul class="loginTabs">
      <li class="action">用户密码登录1.0.7</li><li>钉钉扫码登录</li>
    </ul>
    <div element-loading-text="拼命登录中..." class="loginBody">
        <el-form size="small" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user">
            <el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item label="验证码" prop="newVerificationCode" style="width:208px;" v-if="isVerificationCode">
            <el-input v-model="ruleForm.newVerificationCode" auto-complete="off" placeholder="请输入验证码"></el-input>
            <div class="verificationCodeImgBox">
              <img :src="verificationCodeImg" @click="getImgVerificationCode">
            </div>
          </el-form-item>
          <!-- 登录失败，错误提醒 -->
          <div class="errorTitle" v-show="errorTitleState">
            <i class="icon iconfont icon-warning"></i>{{ errorTitle }}
          </div>
          <el-form-item label="" prop="">
            <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
            <span class="forgotPWD">忘记密码？</span>
          </el-form-item>
          <div class="item">
            <el-button type="primary" size="small" class="submitFormButton" @click="submitForm('ruleForm')">立即创建</el-button>
          </div>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingWindow',
  data () {
    const verificationCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      if (this.verificationCode !== value) {
        return callback(new Error('验证码输入不正确'))
      }
      if (this.verificationCode === value) {
        callback()
      }
    }
    return {
      rememberPassword: true,
      isVerificationCode: false,
      verificationCode: '', // 图片验证码
      verificationCodeImg: '',
      errorTitleState: false,
      errorTitle: '密码不正确',
      ruleForm: {
        user: '',
        pass: '',
        newVerificationCode: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 0,
            max: 25,
            message: '长度在 0 到 25 个字符',
            trigger: 'blur'
          }
        ],
        pass: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        newVerificationCode: [{ validator: verificationCode, trigger: 'blur' }]
      }
    }
  },
  created () {

  },
  mounted () {
    this.getImgVerificationCode()
  },
  components: {},
  methods: {
    getImgVerificationCode () {
      this.$http.get(this.Global.baseURL + this.Global.api.UniversalInterface.imgVerificationCode).then((res) => {
        this.verificationCode = res.data.code
        this.verificationCodeImg = res.data.imgUrl
      }, (res) => {
        this.$message.error('网络异常请重试')
      })
    },
    // 提交
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 没有显示验证码
          this.auth()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 登录
    async auth () {
      let { data } = await this.$http.post(this.Global.baseURL + this.Global.api.v2.auth, this.ruleForm)
      // 成功
      if (data.code.toString() === this.Global.RES_OK) {
        this.$emit('auth', data)
      } else {
      // 失败
        // 错误提醒
        this.errorTitleState = true
        this.errorTitle = data.msg
        // 显示验证码
        this.isVerificationCode = true
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url('~@/assets/less/mixins.less');
.LandingWindow {
    width: 380px;
    padding-bottom: 20px;
    background-color: aqua;
    position: absolute;
    right: 0px;
    top: 120px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    ul.loginTabs {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #eee;
        position: relative;
        .flex();
        li {
            //width: 50%;
            height: 45px;
            line-height: 48px;
            text-align: center;
            font-size: 16px;
            flex-grow: 1;
        }
        li.action {
            cursor: default;
            color: orange;
        }
    }
    .loginBody {
        overflow: auto;
        padding: 20px 20px 0;
        .verificationCodeImgBox{
            width: 95px;
            height: 30px;
            position: absolute;
            right: -105px;
            top: 5px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              display: block;
              cursor: pointer;
            }
        }
        .errorTitle {
            text-align: left;
            font-size: 14px;
            background-color: #F2F2F2;
            border-radius: 3px;
            color: #222;
            margin-bottom: 8px;
            padding: 5px 15px;
            .iconfont {
                display: inline-block;
                font-size: 18px;
                margin-right: 10px;
                color: #f00;
            }
        }
        .forgotPWD{
          font-size: 12px;
          color: #f90;
          cursor: pointer;
          display: block;
          float: right;
        }
        .item{
          margin-top: 10px;
          .submitFormButton{
            width: 100%;
          }
        }
    }
}
</style>
