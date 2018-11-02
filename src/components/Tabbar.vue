<template>
  <div>
    <router-view></router-view>
    <div class="test-tabbar"
      v-if="$route.name !== 'unlogin' && $route.name !== 'login' && $route.name !== 'register'"
    >
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        tag="div"><van-icon :name="route.icon" size="24px"></van-icon>
        <p>{{route.text}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'tabbar',
  data() {
    return {
      routes: routes.filter(route => route.isTabbar === true),
    };
  },
};
</script>

<style lang="scss" scoped>
i {
  margin-top: 5px;
  color: rgb(204, 204, 204);
}
p {
  font-size: 12px;
  margin-top: 2px;
  position: relative;
  bottom: 1px;
}
.test-tabbar {
  z-index: 9999;
  background-color: white;
  border-top: 1px solid rgb(204, 204, 204);
  box-sizing: border-box;
  height: 52px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  & > div {
    flex: 1;
    color: rgb(163, 163, 163);
    text-align: center;
    position: relative;
  }
  .router-link-exact-active,
  .router-link-active {
    transition: all .5s;
    color: rgb(3, 123, 255);
    font-size: 30px;
    font-weight: bold;
    position: relative;
    bottom: 8px;
  }
  .router-link-exact-active,
  .router-link-active p {
    position: relative;
    bottom: 5px;
  }
  .router-link-exact-active,
  .router-link-active i {
    color: rgb(3, 123, 255);
  }
  .test-badge {
    position: absolute;
    right: 0;
    top: -7px;
    background-color: #900;
    color: white;
    line-height: 14px;
    font-size: 14px;
    padding: 5px;
    border-radius: 50%;
  }
}
</style>
