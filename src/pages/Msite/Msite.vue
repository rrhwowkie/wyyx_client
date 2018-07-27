<template>
  <div>
    <!--首页搜索与导航条-->
    <MsiteHeader/>
    <!--轮播图-->
    <banner/>
    <!--轮播图下的文字部分-->
    <bannerTxt/>
    <!--品牌制造商直供-->
    <MsitePinpai/>
    <!--新品首发-->
    <MsiteNew/>
    <!--好物精选-->
    <MsiteJingxuan/>
    <!--限时-->
    <MsiteTime/>
    <!--专题-->
    <MsiteZt/>
    <!--居家-->
    <MsiteJujia/>
  </div>
</template>
<script>
  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import banner from '../../components/banner/banner.vue'
  import bannerTxt from '../../components/bannerTxt/bannerTxt.vue'
  import MsitePinpai from '../../components/MsitePinpai/MsitePinpai.vue'
  import MsiteNew from '../../components/MsiteNew/MsiteNew.vue'
  import MsiteJingxuan from '../../components/MsiteJingxuan/MsiteJingxuan.vue'
  import MsiteTime from '../../components/MsiteTime/MsiteTime.vue'
  import MsiteZt from '../../components/MsiteZt/MsiteZt.vue'
  import MsiteJujia from '../../components/MsiteJujia/MsiteJujia.vue'

  export default {
    components:{
      MsiteHeader,//将组件映射成标签再写到div中
      banner,
      bannerTxt,
      MsitePinpai,
      MsiteNew,
      MsiteJingxuan,
      MsiteTime,
      MsiteZt,
      MsiteJujia,
    }
  }
</script>
<style lang="less" rel="stylesheet/less">

</style>
