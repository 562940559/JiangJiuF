<template>
  <!-- 背景图 -->
  <div class="bg">
    <!-- 蒙版 -->
    <div class="mask">
      <div class="content">
        <!-- 表单 -->
        <form>
          <!-- 个人图标 -->
          <div class="icon">
             <van-icon name='contact' color='rgb(193,193,193)'/>
          </div>
          <!-- 返回按钮 -->
          <span class="goback" @click='goback'>
             &lt;
          </span>
          <!-- 用户名 -->
          <input type="text" placeholder="请注册邮箱或手机号" @input='addName'>
          <!-- 密码 -->
          <input type="password" placeholder="请设置密码" @input='addPassword'>
          <!-- 登陆 -->
          <div class="submit">
            <button class="btn" @click="handleSubmit">注 册</button>
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
  computed: {
    ...mapState(['isLogin']),
  },
  methods: {
      ...mapActions(['login', 'addUsers']),
      ...mapMutations(['addName', 'addPassword', 'addUsers']),
    goback() {
      this.$router.push('/home')
    },
    handleSubmit() {
      let error = [false,false];
      // if(store.state.name !== '')
      let name = store.state.name;
      let password = store.state.password;
      if ( name === '' || password === '') {
        console.log(this)
        return Toast('用户名和密码不能为空');
      } else {
        var reg=/^1[3456789]\d{9}$/;
        var reg1= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if(!reg.test(name) && !reg1.test(name)){
          error[0] = true;
          return Toast('请输入有效的手机号码或邮箱');
        } else {
          if(password.length < 6){
            error[1] = true;   
            return Toast('密码长度最小6位');   
          } else {
            if (!error.includes(true)){
              Toast.success('提交成功');
              // addUsers()
            }
          }
        }
      }
      login({
        username: name,
        password: password,
      }).then((resp) => {
        window.localStorage.setItem('token', resp.data.token);
        this.$router.push('/cart');
      }).catch(err => console.log(err));
    },
  },
};
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
  color:white;
  background-color: rgb(157, 157, 157);
  font-size: 20px;
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
  font-size: 20px;
  width: 100%;
  border: none;
  background-color: rgb(70, 127, 255);
  height: 40px;
  padding: 0;
  margin-top: 30px;
  color: white;
}
</style>
