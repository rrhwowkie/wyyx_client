<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/a.jpg" alt="">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="./images/b.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/c.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/d.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,

        /*slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },*/
      })
    }
   /* mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
      })
    },*/
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/ximins";
  .swiper-container{
    background-color: #ffffff;
    width: 750/@rem;
    height: 433/@rem;
    .swiper-wrapper{
      width: 670/@rem;
      height: 385/@rem;
      .swiper-slide{

        img{
          width: 670/@rem;
          height: 385/@rem;
        }
      }
    }
  }

</style>
