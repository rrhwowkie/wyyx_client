<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/3.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/4.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/5.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/6.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/7.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
//        direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          clickableClass : 'my-pagination-clickable',
        },
        autoplay: {
          stopOnLastSlide: true,
        },
      })
    },
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/ximins";
  .swiper-container{
    margin-top: 148/@rem;
    .swiper-wrapper{
      .swiper-slide{
        img{
          width: 100%;
          height: 400/@rem;
        }
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        width:40/@rem;
        height:6/@rem;
        border-radius: 3/@rem;
        background-color: #ffffff;
      }
    }
  }
</style>
