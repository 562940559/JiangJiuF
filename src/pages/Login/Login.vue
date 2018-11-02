<template>
  <!-- 背景图 -->
  <div class="bg">
    <!-- 蒙版 -->
    <div class="mask">
      <div class="content">
        <!-- 表单 -->
        <form action="">
          <!-- 个人图标 -->
          <div class="icon">
             <van-icon name='contact' color='rgb(193,193,193)'/>
          </div>
          <!-- 返回按钮 -->
          <span class="goback" @click='goback'>
             &lt;
          </span>
          <!-- 用户名 -->
          <input type="text" placeholder="邮箱/手机号" @input='login_name'>
          <!-- 密码 -->
          <input type="password" placeholder="密码" @input='login_password'>
          <p>
            <a href="#"> 忘记密码？</a>
          </p>
          <!-- 登陆 -->
          <div class="submit">
            <button class="btn" @click="handleSubmit">登 陆</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { login } from '../../services2';
import store from '../../store';
// import './index.less';

import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      loginName:'',
      loginPassword:'',
    }
  },
  computed: {
    ...mapState(['isLogin', 'name', 'password']),
  },
  methods: {
    goback() {
      this.$router.push('/home')
    },
    login_name(e){
      this.loginName = e.target.value;
      console.log(this.loginName)
    },
    login_password(e) {
      this.loginPassword = e.target.value;
      console.log(this.loginPassword)
    },
    handleSubmit() {
      if(this.loginName === '' || this.loginPassword === ''){    
         return Toast('不能输入空白内容');
      }
      if(this.loginName !== store.state.name){
        return Toast('用户名未注册');
      }
      if(this.loginPassword !== store.state.password){     
        return Toast('密码错误');        
      }
      else {
        Toast.success('登陆成功');
      }
      login({
        username: this.loginName,
        password: this.loginPassword,
      }).then((resp) => {
        window.localStorage.setItem('token', resp.data.token);
        store.state.token = resp.data.token;
        this.$router.push('/cart');
      }).catch(err => console.log(err));
    }
  } 
}
</script>


<style lang="less" scoped>
.bg {
  width: 100%;
  position: absolute;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../assets/bg.png');
}

.mask {
  width: 100%;
  position: absolute;
  height: 100%;
  background: rgba(0, 0, 0, .3)
}

.content {
  width: 60%;
  height: 200px;
  text-align: center;
  margin: 140px auto;
}

.goback {
  display: inline-block;
  color: red;
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin:25px 0;
}

form .icon {
  width: 80px;
  height: 80px;
  font-size: 30px;
  border: white solid;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;
  background-color: #fff;
}
.van-icon {
  top: 20px;
  }
form input {
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  height: 30px;
  padding:20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: rgb(157, 157, 157);
  font-size: 20px;
  color: white;
}
form input::placeholder {
  color: white;
}

form p {
  margin-top: 10px;
  }
  a{
    font-size: 20px;
    color: rgb(36, 128, 80)
  }
form .submit .btn{
  width: 100%;
  font-size: 20px;
  border: none;
  background-color: rgb(58, 220, 127);
  height: 40px;
  padding: 0;
  margin-top: 30px;
  color: white;
}
</style>
