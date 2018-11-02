<template>
  <div class="list-vue">
    <!-- 顶部导航及返回 -->
    <van-nav-bar
      title="列表"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" color="rgb(22, 185, 90)" sticky>
      <van-tab title="综合">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <!-- 获取假数据循环遍历渲染 -->
          <van-cell
            v-for="(item, index) in List"
            :key="item.id"
            class="shop_list_content"
            @click="gotoDetail(item.id)"
          >
            <img :src="item.thumb">
            <h1>{{ formatPrice(index) }}</h1>
            <h2>{{item.title}}</h2>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab title="上新">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-cell
            v-for="(item, index) in List"
            :key="item.id"
            class="shop_list_content"
          >
            <img :src="item.thumb">
            <h1>{{ formatPrice(index) }}</h1>
            <h2>{{item.title}}</h2>
          </van-cell>
        </van-list>
      </van-tab>
      <van-tab title="价格">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'list',
      active: 0,
      // 存放第一次显示的数据的数组和接着显示的数据的数组
      shopItem: [],
      List: [],
      loading: false,
      finished: false,
    };
  },
  mounted() {
    this.$http.getShopItem()
      .then((resp) => {
        this.shopItem = resp.data.data;
      });
  },
  methods: {
    // 回退方法
    onClickLeft() {
      this.$router.go(-1);
    },
    formatPrice(i) {
      return `¥ ${(this.shopItem[i].price / 100).toFixed(2)}`;
    },
    // 把点击到的id传到详情页的route中
    gotoDetail(id) {
      this.$router.push({
        name: 'detail',
        params: {
          id,
        },
      });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i += 1) {
          this.List.push(this.shopItem[this.List.length]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.List.length >= 80) {
          this.finished = true;
        }
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-tab__pane {
  width: 100%;
  box-sizing: border-box;
}
.van-list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.shop_list_content {
  width: 49.9%;
  height: 200px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 3px;
  position: relative;
  margin-top: 1px;
  img {
    width: 100%;
    height: 70%;
  }
  h1 {
    float: right;
    font-size: 12px;
    color: black;
    font-weight: normal;
    margin-right: 10px;
  }
  h2 {
    position: absolute;
    bottom: 5px;
    font-size: 10px;
    margin-left: 10px;
    line-height: 10px;
  }
}
</style>
