<template>
  <div class="login-container">
    <el-row :gutter="20" class="login-form" type="flex" justify="center">
      <el-col :xs="24" :sm="12" :md="10" :lg="8" :xl="12">
        <el-form
          ref="loginForm"
          
          :rules="loginRules"
          :label-position="pos"
          :size="size"
          :model="formLabelAlign"
        >
          <div class="login-title">
            <h3>大中台欢迎你</h3>
          </div>
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-search"
              auto-complete="on"
              ref="username"
              placeholder="用户名"
              v-model="formLabelAlign.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              ref="password"
              v-model="formLabelAlign.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input placeholder="验证码" v-model="formLabelAlign.captcha">
              <template slot="prepend">
                <img @click="refesh($event)" class="captcha" src="/api/captcha" alt>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              style="width:100%;margin-bottom:30px;"
              @click.native.prevent="handleLogin('loginForm')"
            >登录</el-button>
          </el-form-item>
          <el-form-item class="description">请使用github 进行登录然后进行配置用户</el-form-item>
          <el-form-item class="description">
            <el-button @click="github">github登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    const validateUsername = (rule, value, callback) => {};
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error("验证码不能小于4位"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        // password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        captcha: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 26, message: "长度在 4 到 26 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 26, message: "长度在 8 到 26 个字符", trigger: "blur" }
        ]
      },
      formLabelAlign: {
        username: "",
        password: "",
        captcha: ""
      },
      loading: false
    };
  },
  computed: {
    size() {
      return this.$store.getters.size;
    },
    pos() {
      return this.$store.getters.pos;
    }
  },
  created() {
    // this.$fetch({
    //     url:'/api/foobar/query',
    //     method: 'get',
    //     data: {
    //       query:90
    //     },
    //   }).then((res) => {
    //     console.log(res)
    //   })
    console.log(this.$store);
  },
  methods: {
    github() {
      const { productionTip } = Vue.config;
      let client_id = "";
      if (productionTip) {
        client_id = "4b4cb5fb589adb60eae7";
      } else {
        client_id = "51d05a17a35f58a98933";
      }
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
    },
    refesh(e) {
      e.target.src = `${e.target.src}?${Date.now()}`;
    },
    loginFetch() {
      this.$fetch({
        url: "/api/bmplogin",
        method: "post",
        data: this.formLabelAlign
      })
        .then(res => {
          if (res) {
            //  保存用户信息

            this.$store.dispatch("login/setUserInfo", res.data);
            // 如果验证正确跳转到首页
            this.$router.replace({ path: "/" });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleLogin(formName) {
      this.$refs[formName].validate(isValid => {
        if (isValid) {
          this.loading = true;
          this.loginFetch();
        }
        return false;
      });
    }
  }
};
</script>
<style lang="scss">
// 覆盖原有的element输入框样式
// .login-container{
//  .el-input {
//     display: inline-block;

//     input {
//       background: transparent;

//       -webkit-appearance: none;
//       border-radius: 5px;

//     }
//   }
// }
</style>

<style lang="scss" scoped>
.login-container {
  // 给个背景颜色 最小高度100%
  background: #2d3a4b;
  min-height: 100vh;

  .login-form {
    // 固定宽度 水平居中 超出隐藏
    position: relative;
    // width: 520px;
    min-width: 300px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-title {
    color: white;
    font-size: 24px;
  }
  .captcha-input {
    width: 200px;
  }
  .captcha {
    cursor: pointer;
    height: 34px;
    vertical-align: middle;
  }
  .description {
    color: white;
  }
}
</style>
