<template>
  <div>
    <!--首页搜索与导航条-->
    <MsiteHeader/>
    <!--轮播图-->
    <banner/>
    <!--轮播图下的文字部分-->
    <bannerTxt/>
  </div>
</template>
<script>
  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import banner from '../../components/banner/banner.vue'
  import bannerTxt from '../../components/bannerTxt/bannerTxt.vue'

  export default {
    components:{
      MsiteHeader,//将组件映射成标签再写到div中
      banner,
      bannerTxt,
    }
  }
</script>
<style lang="less" rel="stylesheet/less">

</style>
