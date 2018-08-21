<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'fumamx-client'
  }
</script>

<style>
.app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
@import '~@/assets/less/reset.less';
@import '~@/assets/icon-font/iconfont.css';
</style>
