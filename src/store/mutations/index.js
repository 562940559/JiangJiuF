import types from '../mutationsTypes';
import { Toast } from 'vant';

export default {
  // 点击加减数量 实时更新state的count 并将localstorage的值更新
  [types.INCREMENT](state, id) {
    state.shopItem = state.shopItem.map((item) => {
      const newItem = item;
      if (item.id === id) {
        newItem.count += 1;
      }
      return newItem;
    });
    window.localStorage.setItem('cart', JSON.stringify(state.shopItem));
  },
  // 同上 不过此为减少
  [types.DECREMENT](state, id) {
    state.shopItem = state.shopItem.map((item) => {
      const newItem = item;
      if (item.id === id) {
        newItem.count -= 1;
        if (newItem.count < 1) {
          newItem.count = 1;
          Toast("还不想买了哦？");
        }
      }
      return newItem;
    });
    window.localStorage.setItem('cart', JSON.stringify(state.shopItem));
  },
  // 删除
  [types.DELETEC](state, id) {
    state.shopItem = state.shopItem.filter((item) => item.id !== id);
    window.localStorage.setItem('cart', JSON.stringify(state.shopItem));
  },
  [types.LOGIN] (state) {
    state.isLogin = true
  },
  addName(state,e) {
    state.name = e.target.value;
  },
  addPassword(state,e) {
    state.password = e.target.value;
  },
}