import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';

const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/115796' : '真实地址',
});

export const login = ({username, password}) => {
  return ajax.post('/api/jiangjiu/login', {
    username,
    password
  })
};

export const checkToken = ({token}) => {
  return ajax.post('/api/jiangjiu/checkToken', {
    token
  });
};
