<template>
  <div>
    <!-- 顶部吸顶的选项卡 -->
    <van-tabs v-model="active" color="rgb(3, 123, 255)" sticky>
      <!-- 第一个选项卡标题及内容 -->
      <van-tab title="分类">
        <div class="tab1_content">
          <!-- 循环渲染加载data的数据 -->
          <router-link to="/list" v-for="imgs in Tab1_imgs" :key="imgs" :src="imgs" tag="img" />
        </div>
      </van-tab>
      <!-- 第二个选项卡标题及内容 -->
      <van-tab title="品牌">
        <div class="tab2_content">
          <!-- list标签存放瀑布流功能 -->
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            loading-text="稍等片刻...- -!"
          >
            <!-- 循环图片 -->
            <van-cell v-for="imgs in list" :key="imgs">
              <router-link to="/list" :src="imgs" tag="img"/>
            </van-cell>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'classify',
  data() {
    return {
      // 存放初次加载时的图片信息
      list: [
        '/static/imgs/tab2/tab2_1.png',
        '/static/imgs/tab2/tab2_2.png',
        '/static/imgs/tab2/tab2_3.png',
      ],
      loading: false,
      finished: false,
      active: 2,
      Tab1_imgs: [
        '/static/imgs/tab1/up_new.png',
        '/static/imgs/tab1/area.png',
        '/static/imgs/tab1/beauty.png',
        '/static/imgs/tab1/dress.png',
        '/static/imgs/tab1/exclusive.png',
        '/static/imgs/tab1/gift.png',
        '/static/imgs/tab1/hot.png',
        '/static/imgs/tab1/life_different.png',
        '/static/imgs/tab1/local_selected.png',
        '/static/imgs/tab1/welfare.png',
      ],
      // 存放还没加载出来的图片信息，用瀑布流加载
      Tab2_imgs: [
        '/static/imgs/tab2/tab2_4.png',
        '/static/imgs/tab2/tab2_5.png',
        '/static/imgs/tab2/tab2_6.png',
        '/static/imgs/tab2/tab2_7.png',
        '/static/imgs/tab2/tab2_8.png',
        '/static/imgs/tab2/tab2_9.png',
        '/static/imgs/tab2/tab2_10.png',
        '/static/imgs/tab2/tab2_11.png',
        '/static/imgs/tab2/tab2_12.png',
        '/static/imgs/tab2/tab2_13.png',
        '/static/imgs/tab2/tab2_14.png',
        '/static/imgs/tab2/tab2_15.png',
        '/static/imgs/tab2/tab2_16.png',
        '/static/imgs/tab2/tab2_17.png',
        '/static/imgs/tab2/tab2_18.png',
        '/static/imgs/tab2/tab2_19.png',
        '/static/imgs/tab2/tab2_20.png',
        '/static/imgs/tab2/tab2_21.png',
        '/static/imgs/tab2/tab2_22.png',
        '/static/imgs/tab2/tab2_23.png',
        '/static/imgs/tab2/tab2_24.png',
        '/static/imgs/tab2/tab2_25.png',
        '/static/imgs/tab2/tab2_26.png',
        '/static/imgs/tab2/tab2_27.png',
        '/static/imgs/tab2/tab2_28.png',
        '/static/imgs/tab2/tab2_29.png',
        '/static/imgs/tab2/tab2_30.png',
        '/static/imgs/tab2/tab2_31.png',
        '/static/imgs/tab2/tab2_32.png',
        '/static/imgs/tab2/tab2_33.png',
      ],
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 3; i += 1) {
          this.list.push(this.Tab2_imgs[this.list.length]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 29) {
          this.finished = true;
        }
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab1_content {
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 0px;
  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
}
.tab2_content {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
}
.van-cell {
  padding: 0;
}
</style>
