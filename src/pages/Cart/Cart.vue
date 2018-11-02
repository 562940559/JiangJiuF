<template>
  <div class="cartVue">
    <!-- checkbutton组 每一个都绑定好相应的数据 -->
    <div class="checkBoxGroup">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="(item) in $store.state.shopItem"
          :key="item.id"
          :name="item.id"
        >
        <!-- checkbox内部不添加标签 将无法显示出来 -->
        <span></span>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <!-- 显示购物车商品信息的card -->
    <div class="card">
      <!-- 将card放入滑块标签中 -->
      <van-swipe-cell
        :right-width="65"
        v-for="(item) in $store.state.shopItem"
        :key="item.id"
      >
        <van-cell-group>
          <van-cell>
            <!-- 通过item循环渲染 -->
            <van-card
              :title="item.title"
              :num="item.count"
              :price="formatPrice(item.price)"
              :thumb="item.thumb"
            >
              <!-- 修改当前物品的数量 -->
              <div slot="footer">
                <span>数量:</span>
                <van-button size="mini" @click="decrement(item.id)">-</van-button>
                <span>{{item.count}}</span>
                <van-button size="mini" @click="increment(item.id)">+</van-button>
              </div>
            </van-card>
          </van-cell>
        </van-cell-group>
        <!-- 左滑显示出删除当前购物车按钮 -->
        <span slot="right" @click="deleteCard(item.id)">
          <van-icon name="delete" />
        </span>
      </van-swipe-cell>
    </div>
    <!-- 根据checkbox计算所选商品的数量及总价 -->
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="geiqian"
    >
    <!-- 全选按钮 -->
    <van-checkbox v-model="isAllChecked" class="allCheckBtn">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
// 引入弹出框Toast
import {
  Toast,
} from 'vant';
// 引入vuex
import {
  mapState,
  mapMutations,
} from 'vuex';

export default {
  data() {
    return {
      // 存储所选的checkbox的值的数组
      checkedGoods: [],
    };
  },
  computed: {
    // 解构
    ...mapState(['cart']),
    // 根据checkedGoods的长度 判读是否能够触发结算按钮 并呈现所选的checkbox的数量
    submitBarText() {
      return `结算${(this.checkedGoods.length ? `(${this.checkedGoods.length})` : '')}`;
    },

    // 根据checkbox的所选情况及商品的单价和数量来计算出总价
    totalPrice() {
      return this.$store.state.shopItem.reduce((total, item) =>
        total + (this.checkedGoods.indexOf(item.id) !== -1 ?
          item.price * item.count : 0), 0);
    },
    // 原生get set 来进行全选
    isAllChecked: {
      get() {
        return this.checkedGoods.length === this.$store.state.shopItem.length;
      },
      set(val) {
        if (val) {
          this.checkedGoods = this.$store.state.shopItem.map(item => item.id);
        } else {
          this.checkedGoods = [];
        }
      },
    },
  },
  methods: {
    ...mapMutations(['increment', 'decrement', 'deleteC']),
    // 删除功能 并重新获取checkGoods来进行checkGoods的更新
    deleteCard(id) {
      this.deleteC(id);
      this.checkedGoods = this.checkedGoods.filter(
        (item) => {
          const newCheckGoods = this.$store.state.shopItem
            .map(good => good.id).includes(item);
          return newCheckGoods;
        },
      );
    },
    // 把num转化成取后两位的价位
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    geiqian() {
      Toast('快转账给我！我都要亏死了！');
    },
  },
};
</script>

<style lang="scss" scoped>
.van-cell {
  background-color: rgb(250, 250, 250);
}
.van-card__title {
  font-weight: bold;
  color: #f44;
}
.van-swipe-cell__right span {
  display: inline-block;
  height: 100%;
  line-height: 120px;
  width: 64px;
  color: white;
  text-align: center;
  background-color: red;
}
.cartVue {
  display: flex;
  flex-direction: row;
}
.card {
  flex: 1;
  margin-bottom: 52px;
}
.card-goods__item {
  height: 120px;
}
.van-button--mini {
  width: 30px;
}
.card-goods {
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-submit-bar {
  bottom: 52px;
}
.allCheckBtn {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
