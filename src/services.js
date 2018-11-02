import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

// 商品信息的接口地址
const http = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/115943' : '真实地址',
});

export const getShopItem = () => {
  return http.get('/api/jiangjiu/shopItem');
};
