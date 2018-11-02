export default {
  // 计算总价
  totalPrice(state) {
    return state.cart.reduce((result, item) => {
      const newResult = result + (item.price * item.count);
      return newResult;
    }, 0);
  },
}