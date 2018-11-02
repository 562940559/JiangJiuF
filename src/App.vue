<template>
  <div class="pages_content">
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

export default {
  name: 'App',
  components: {
    Tabbar,
  },
};
</script>

<style>
.pages_content {
  padding-bottom: 52px;
}
</style>
