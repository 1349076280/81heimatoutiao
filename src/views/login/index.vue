<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form :model="formData" :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入您的手机号" v-model="formData.mobile"></el-input>
        </el-form-item>
         <el-form-item prop="code">
          <el-input placeholder="请输入验证码" style="width:65%;" v-model="formData.code"></el-input>
          <el-button style="float:right" >获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formData.check">我已阅读同意<a href="#">用户协议</a>和<a href="#">隐私协议</a></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </div>
</template>

<script>
export default {

  data () {
    var fun = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('必须选中'))
      }
    }
    return {
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [{
          required: true,
          message: '登录手机号不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],

        code: [
          {
            required: true,
            message: '验证码不能为空',
            trigger: 'blur'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码长度必须为6个数字',
            trigger: 'blur'
          }],
        check: [{
          // message: '您必须选择才能进行下一步',
          validator: fun
        }]

      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((isOk, result) => {
        // console.log(isOk)
        // console.log(result)
        if (isOk) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.formData
          }).then(result => {
            window.localStorage.setItem('use-info', JSON.stringify(result.data.data))
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .login {
      width: 100%;
      height: 100vh;
      background-image: url('../../assets/img/login_bg.jpg');
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-card {
        width : 460px;
        height : 340px;
        a:hover {
          color: blue
        }
        .title {
          text-align: center;
          img {
            width: 200px;
          }
        }
      }
    }

</style>
