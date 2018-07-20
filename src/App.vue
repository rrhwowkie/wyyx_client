<template>
  <div id="app">
    <!--页面由router-view（路由组件）和FooterGuide（非路由组件）两个组件-->
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
  components: {
    FooterGuide
  }

}
</script>
<style lang="less" rel="stylesheet/less">
  #app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
