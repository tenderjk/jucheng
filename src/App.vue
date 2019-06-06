<template>
  <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<style lang="scss">
@import '@/lib/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @include flexbox();
  @include flex-direction(column);
  width:100%
}
html,body,#app {
  @include rect(100%,100%)
}
.container {
  @include flex(1);
  overflow: auto;
  width:100%;
}
</style>
