<template>
  <div class="container" id="login">
    <div class="header">
      <mt-header title="">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="welcome">
      <p>欢迎来到jucheng网</p>
    </div>
    <div class="login">
      <input placeholder="请输入用户名" v-model="username" />
      <input placeholder="请输入密码" type="password" v-model="password" />
      <button @click="check" :class=" username.length>0?'active':'' ">登&nbsp;录</button>
      <div class="opts">
        <span>忘记密码？</span>
        <span>注册</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
import qs from 'querystring'
axios.defaults.withCredentials = true
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async check () {
      let flag = true
      const reg = /^[\d]{11}$/
      if (!reg.test(this.username)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        })
        flag = false
        await this.wait(2000)
      }
      if (this.password.length === 0) {
        Toast({
          message: '密码不能为空',
          duration: 2000
        })
        flag = false
      }
      if (flag === true) {
        let header = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        let data = {
          username: this.username,
          password: this.password,
          loginType: 3,
          regFrom: 2,
          isCard: 1,
          next: '',
          relevanceK: '',
          isRelevance: 0
        }
        let res = await axios.post('https://m.juooo.com/Passport/doLoginRoute', qs.stringify(data), header)
        res = res.data
        if (res.code === 0) {
          Toast({
            message: res.msg,
            duration: 2000
          })
        } else {
          Toast({
            message: res.msg,
            duration: 2000
          })
          localStorage.setItem('username', this.username)
          this.$router.go(-1)
        }
      }
    },
    wait (duration) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
@import url('//at.alicdn.com/t/font_1225232_xu69k0wo4bp.css');
#login {
  background: url('../assets/login_bg.png') no-repeat center;
  background-size: 100%;
  background-clip: cover;
  .header {
    .mint-header {
      color: rgb(100, 100, 100);
      background: none;
      @include rect(auto,0.4rem);
      font-size: 0.18rem;
    }
  }
  .welcome {
    padding: 0 0.2rem;
    text-align: left;
    margin-top: 0.3rem;
    p {
      font-weight: bold;
      font-size: 0.2rem;
    }
  }
  .login {
    margin-top: 0.5rem;
    padding: 0 0.2rem;
    @include flexbox();
    flex-direction: column;
    @include rect(100%,auto);
    input {
      border: none;
      outline: none;
      border-bottom: 0.01rem solid #e5e5e5;
      padding: 0.1rem;
      margin: 0 0.05rem;
    }
    button {
      background: #ebebeb;
      border: none;
      height: 0.4rem;
      font-size: 0.2rem;
      font-weight: bold;
      color: #fff;
      border-radius: 0.2rem;
      margin-top: 0.2rem;
      &.active {
        background: linear-gradient(to right, #ff9a34, #ff4d4a);
      }
    }
    .opts {
      margin-top: 0.2rem;
      @include flexbox();
      @include rect(100%,auto);
      justify-content: space-between;
    }
  }
}
</style>
