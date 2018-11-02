<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header">
      <span>讲究</span>
      <van-search placeholder="请输入搜索关键词" />
      <van-icon name='gift'></van-icon>
    </div>

    <!-- 滑动部分 -->
    <div class="main">
      <!-- 轮播图 -->
      <div class="boadcast">
        <van-swipe :autoplay="3000">
          <van-swipe-item><img src="http://cdn.jjglobal.com/media/wysiwyg/banner/top/penwu.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="http://cdn.jjglobal.com/media/wysiwyg/banner/top/1_27.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="http://cdn.jjglobal.com/media/wysiwyg/banner/top/1_30.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="http://cdn.jjglobal.com/media/wysiwyg/banner/top/penwu.jpg" alt=""></van-swipe-item>
        </van-swipe>
      </div>
      <!-- 广告图 -->
      <div class="ad">
          <a href="#"><img src="http://cdn.jjglobal.com/media/catalog/category/new.png" alt=""></a>
          <a href="#"><img src="http://cdn.jjglobal.com/media/catalog/category/_-1_3.png" alt=""></a>
          <a href="#"><img src="http://cdn.jjglobal.com/media/catalog/category/hot.png" alt=""></a>
          <a href="#"><img src="http://cdn.jjglobal.com/media/catalog/category/file_68.png" alt=""></a>
          <a href="#"><img src="http://cdn.jjglobal.com/media/catalog/category/file_67.png" alt=""></a>
      </div>
      <!-- 分类 -->
      <div class="coverIcon">
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/21-c-59-m.png" alt="">
          </a>
          <p>全球原生</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/22-c-10-m.png" alt="">
          </a>
          <p>创意生活</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/23-c-53-m.png" alt="">
          </a>
          <p>有机美妆</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/24-c-85-m.png" alt="">
          </a>
          <p>有机食品</p>
        </div>
        <div>
          <a href="#">
          <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/25-c-60-m.png" alt="">
          </a>
          <p>文创用品</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/26-c-7-m.png" alt="">
          </a>
          <p>女装</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/27-c-8-m.png" alt="">
          </a>
          <p>包包</p>
        </div>
        <div>
          <a href="#">
            <img src="http://cdn.jjglobal.com/media/wysiwyg/app/home2/28-c-9-m.png" alt="">
          </a>
          <p>配饰</p>
        </div>
      </div>
      <!-- 横幅图 -->
      <div class="banner">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
        <a href="#">
          <img
          v-for='img in list'
          :key='img.index'
          :src='img'
          >
        </a>
      </van-list>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      list: [
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/baojiazhuanchang.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_70.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/p2_4.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_67.jpg',
      ],
      list1: [
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_68.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/p2_5.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_71.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_69.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/baojiazhuanchang.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_70.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/p2_4.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_67.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_68.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/p2_5.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/p2_5.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_71.jpg',
        'http://cdn.jjglobal.com/media/wysiwyg/banner/middle/P1_69.jpg',
      ],
      loading: false,
      finished: false,
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 4; i += 1) {
          this.list.push(this.list1[i]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 17) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  background-color: rgb(242, 242, 242);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  z-index: 5;
  span {
    font-weight: bold;
    font-size: 18px;
    margin-left:10px;
  }
  .van-search {
    display: inline-block;
    flex:1;
  }
}

.main{
  padding-top: 55px;
  padding-bottom: 50px;
}

.boadcast {
  height: 100%;
}
.van-swipe-item img{
  width: 100%;
}

.ad {
  display: flex;
  overflow: auto;
  margin: 10px 0;
  a img {
    margin-right: 5px;
    width: 100px;
  }
}

.coverIcon {
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  div {
    width: 25%;
    text-align: center;
    img {
      width: 40px;
    }
    p {
      font-size: 14px;
    }
  }
}

.banner img {
  width: 100%;
  height: 300px;
}
</style>
