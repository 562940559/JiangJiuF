<template>
  <!-- 背景图 -->
  <div class="bg">
    <!-- 蒙版 -->
    <div class="un-mask">
      <!-- 文字 -->
      <div class="un-content">
        <h1>J</h1>
        <p>JJGLOBAL.COM</p>
        <P>~</P>
        <P>世界生活美学馆</P>
      </div>
      <!-- 返回按钮 -->
      <span class="un-goback" @click='goback'> 
        <!-- <a href="#"> -->
          &lt;
        <!-- </a> -->
      </span>
      <!-- 底部按钮 -->
      <div class="un-bottom">
        <router-link to='/login'>登陆</router-link>
        <router-link to='/register'>注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>

//import './index.less';

export default {
  name: 'unlogin',
  methods:{
    goback() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.un-bg {
  width: 100%;
  position: absolute;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../assets/bg.png');
}

.un-mask {
  width: 100%;
  position: absolute;
  height: 100%;
  background: rgba(0, 0, 0, .3)
}

.un-content {
  width: 50%;
  height: 200px;
  text-align: center;
  margin: 150px auto;
  h1 {
    font-size: 100px;
    color: white;
    margin-bottom: 70px;
  }
  p {
    font-size: 20px;
    margin-bottom: 15px;
    color: rgb(204, 218, 231);
  }
  p:nth-child(2){
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
  }
}

.un-goback {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: white;
  left: 45%;
  top: 76%;
}

.un-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  height: 50px;
 a{
    flex: 1;
    line-height: 50px;
    font-size: 20px;
  }
  a:first-child {
    background-color: rgb(57, 220, 126);
    color: rgb(32, 124, 71);
  }
  a:last-child {
    background-color: rgb(82, 127, 253);
    color: rgb(38  , 58, 116);
  }
}
</style>

