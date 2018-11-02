<template>
  <div class='wrap'>
    <!-- 顶部头像 -->
    <div class="mine-user">
      <div class="icon">
        <van-icon name='contact' color='rgb(193,193,193)'/>
      </div>
      <!-- 用户名 -->
      <div class="mine-user-name">
        {{this.$store.state.name}}
      </div>
      <!-- 退出登录 -->
       <van-icon name="setting" class="mine-loginout" @click='loginout'/>
    </div>
    <!-- 全部订单 -->
    <div class="mine-order">
      <a href="#">
        <p>全部订单<span>&gt;</span></p>
      </a>
    </div>
    <!-- 横向菜单 -->
    <div class="bg-box">
      <van-row class="mine-links" type='flex'>
        <van-col span="5">
          <van-icon name="pending-payment" />
          待付款
        </van-col>
        <van-col span="5">
          <van-icon name="pending-orders" />
          未发货
        </van-col>
        <van-col span="5">
          <van-icon name="pending-deliver" />
          已发货
        </van-col>
        <van-col span="5">
          <van-icon name="logistics" />
          待评价
        </van-col>
        <van-col span="5">
          <van-icon name="exchange" />
          退款/售后
        </van-col>
      </van-row>
    </div>
    <!-- 广告图 -->
    <div class="mine-order">
      <a href="#">
        <p>积分商城<span>&gt;</span></p>
      </a>
    </div>
    <div class="banner">
      <img src="http://cdn.jjglobal.com/media/merchant/banner/cache/1//940x/17f82f742ffe127f42dca9de82fb58b1/file.png" alt="">
    </div>
    <div class="mine-order">
      <a href="#">
        <p>伙伴计划<span>&gt;</span></p>
      </a>
    </div>
    <div class="banner">
      <img src="http://cdn.jjglobal.com/media/merchant/banner/cache/1//940x/17f82f742ffe127f42dca9de82fb58b1/file.png" alt="">
    </div>
    <div class="mine-order">
      <a href="#">
        <p>关于讲究<span>&gt;</span></p>
      </a>
    </div>
  </div>
</template>

<script>
import store from '../../store';
// import './index.less';
import { Row, Col, Icon, Dialog } from 'vant';

export default {
  name: 'mine',
  data () {
    return store
  },
  methods:{
    loginout () {
      Dialog.confirm({
      title: '注销登陆',
      message: '您确认退出当前账号吗？'
    }).then(() => {
      window.localStorage.removeItem('token');
      this.$router.push('/home');
    }).catch(() => {
      
    });
   }  
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
  },
};
</script>


<style lang="less" scoped>
.mine {
    &-user {
      width: 100%;
      height: 120px;
      padding: 30px;
      background-image: url('../../assets/bg.png');
      &-name {
        margin-left: 90px;
        margin-top: 10px;
        color: rgb( 126, 118, 113)
      }
    }
    &-loginout {
      position: absolute;
      right: 5%;
    }
    &-order {
      width: 100%;
      height: 40px;
      font-size: 17px;
      padding: 10px 15px;
      background-color: white;
      span {
        float: right;
      }
      a {
        color: rgb(117, 117, 117);
      }
    }
    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      border-top: 1px solid #dedede;
      margin-bottom: 15px;
      .van-icon {
        display: block;
        font-size: 24px;
        margin-bottom: 30px;
      }
    }
  }
  
  .mine-user .icon {
    width: 60px;
    height: 60px;
    font-size: 30px;
    border: white solid;
    border-radius: 50%;
    text-align: center;
    background-color: #fff;
    float: left;
  }
  .van-icon {
    top: 10px;
  }
  
  .banner {
    height: 150px;
    margin: 0 10px;
    margin-bottom: 10px;
    background-color: rgb(180, 180, 180);
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .bg-box {
    padding: 15px 0;
    background-color: rgb(244, 244, 244);
  }
</style>
