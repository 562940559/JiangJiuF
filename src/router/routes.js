const Home = () => import('@/pages/Home/Home');
const Classify = () => import('@/pages/Classify/Classify');
const Cart = () => import('@/pages/Cart/Cart');
const Mine = () => import('@/pages/Mine/Mine');
const Detail = () => import('@/pages/Detail/Detail');
const Login = () => import('@/pages/Login/Login');
const List = () => import('@/pages/List/List');
const Unlogin = () => import('@/pages/Unlogin/Unlogin');
const Register = () => import('@/pages/Register/Register');

export default [{
  path: '/',
  redirect: '/home',
}, {
  path: '/home',
  name: 'home',
  text: '首页',
  icon: 'home',
  isTabbar: true,
  component: Home,
}, {
  path: '/classify',
  name: 'classify',
  text: '分类',
  icon: 'shop',
  isTabbar: true,
  component: Classify,
}, {
  path: '/cart',
  name: 'cart',
  text: '购物车',
  icon: 'logistics',
  isTabbar: true,
  component: Cart,
  meta: {
    authRequired: true,
  },
}, {
  path: '/mine',
  name: 'mine',
  text: '我的讲究',
  icon: 'contact',
  isTabbar: true,
  component: Mine,
  meta: {
    authRequired: true,
  },
}, {
  path: '/detail/:id',
  name: 'detail',
  component: Detail,
}, {
  path: '/list',
  name: 'list',
  component: List,
}, {
  path: '/login',
  name: 'login',
  component: Login,
}, {
  path: '/unlogin',
  name: 'unlogin',
  component: Unlogin,
}, {
  path: '/register',
  name: 'register',
  component: Register,
}];
