export default {
  // 把本地的localstorage转换格式后存放进state中 与state相互联立
  shopItem: JSON.parse(window.localStorage.getItem('cart')) || [],
  isLogin: Boolean(window.localStorage.getItem('token')),
  name:'',
  password: '',
};
