<template>
  <div class="goods">
    <!-- 顶部导航及返回 -->
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 轮播图插件 -->
    <van-swipe class="goods-swipe">
      <van-swipe-item v-for="lianjie in goods.lianjie" :key="lianjie">
        <img :src="lianjie" >
      </van-swipe-item>
    </van-swipe>

    <!-- 商品信息介绍 -->
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ detailShopItem.title }}</div>
        <div class="goods-price">{{ formatPrice(detailShopItem.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：库存充足</van-col>
      </van-cell>
    </van-cell-group>

    <!-- 一些无关紧要的 以后可能会加的 现在暂时没用的占位置的东西 -->
    <van-cell-group class="goods-cell-group">
      <van-cell value="快点进来" icon="shop" is-link @click="hahaha">
        <template slot="title">
          <span class="van-cell-text">里面请儿~</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location" is-link @click="hahaha" />
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="hahaha" />
    </van-cell-group>

    <!-- 底部假装存在的客服功能 跳转购物车按钮和添加购物车功能 以及假装存在的付款功能 -->
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" @click="hahaha">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="add_cart_select">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="geiqian">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
    <van-actionsheet v-model="show" title="购物车">
      <img :src="this.goods.lianjie[0]">
      <span>单价:<u>{{ formatPrice(detailShopItem.price) }}</u></span>
      <van-stepper v-model="value" />
      <p @click="addToCart">确定</p>
    </van-actionsheet>
  </div>
</template>

<script>
// 引入弹出框插件
import {
  Toast,
} from 'vant';

export default {
  data() {
    return {
      detailShopItem: [],
      name: 'detail',
      // 添加数量的按钮的默认的初始值
      value: 1,
      // 显示隐藏添加购物车
      show: false,
      // 存储商品信息的data
      goods: {
        lianjie: [
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8636.jpg',
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8651.jpg',
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8629.jpg',
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8641.jpg',
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8648.jpg',
          'http://cdn.jjglobal.com/media/catalog/product/cache/1/thumbnail/780x/17f82f742ffe127f42dca9de82fb58b1/8/6/8637.jpg',
        ],
      },
    };
  },
  mounted() {
    this.$http.getShopItem()
      .then((resp) => {
        this.detailShopItem = resp.data.data[this.$route.params.id - 1];
        // console.log(this.detailShopItem);
      });
  },
  methods: {
    // 回退按钮
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击事件 先是将state的count数目变换为添加的数量 然后把这个id所处的数组传入localstorage中
    addToCart() {
      this.detailShopItem.count = this.value;
      Toast('添加成功');
      const data = JSON.parse(window.localStorage.getItem('cart')) || [];
      const newData = data.concat({
        ...this.detailShopItem,
      });
      const newData1 = JSON.stringify(newData);
      window.localStorage.setItem('cart', newData1);
      // 弹出提示后.5s后刷新页面
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
    // 将数字转化成最多取后两位的价格
    formatPrice() {
      return `¥ ${(this.detailShopItem.price / 100).toFixed(2)}`;
    },
    // 跳转到购物车
    onClickCart() {
      this.$router.push('/cart');
    },
    // 点击还没做好的功能
    hahaha() {
      Toast('别点啦！这需求还没做出来呢！ - - !');
    },
    geiqian() {
      Toast('准备把钱给我咯？');
    },
    // 显示隐藏添加购物车
    add_cart_select() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.add_cart {
  flex: 1;
  width: 100%;
  display: inline-block;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: rgb(81, 126, 253);
  color: white;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action {
  bottom: 52px;
}
.van-swipe__indicators {
  left: 85%;
  bottom: 20px;
}
.van-swipe__indicator--active {
  background-color: rgb(23, 185, 92);
}
.van-button--bottom-action {
  background-color: rgb(81, 156, 253);
}
.van-button--bottom-action.van-button--primary {
  background-color: rgb(23, 185, 92);
}
.van-actionsheet {
  position: fixed;
  bottom: 51px;
  z-index: 50;
  height: 200px;
  overflow: hidden;
  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    margin-left: 20px;
    margin-top: 5px;
  }
  p {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: white;
    background-color: rgb(81, 156, 253);
  }
  span {
    float: right;
    margin-top: 15px;
    margin-right: 20px;
    font-size: 12px;
    u {
      color: rgb(81, 156, 253);
      margin-left: 10px;
    }
  }
}
.van-stepper {
  display: inline-block;
  position: absolute;
  bottom: 60px;
  right: 20px;
}
</style>
