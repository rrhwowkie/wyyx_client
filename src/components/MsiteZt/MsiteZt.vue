<template>
  <div class="m-MsiteFloor">
    <header class="header">
      <div class="header_t">
        <span class="txt">专题精选</span>
        <img src="./images/right.png" alt="">
      </div>
    </header>
    <div class="scroll">
      <div class="scroll-container_d">
        <ul class="list">
          <li class="item">
            <img src="./images/e1b2996dae287c903ea2816785641376.jpg" alt="">
            <div class="txt_a">
              青汁兑蜂蜜, 轻盈又甜蜜
              <span class="price">129元起</span>
            </div>
            <div class="txt_b">每天来杯青汁蜂蜜水，给生活添一点甜蜜</div>
          </li>
          <li class="item">
            <img src="./images/2f49b6ded76919ac7894b02fc9347410.jpg" alt="">
            <div class="txt_a">丁磊的好货推荐</div>
            <div class="txt_b">网易CEO专栏</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    mounted(){
      new BScroll('.scroll-container_d',{
        scrollX:true
      })
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/ximins";
  .m-MsiteFloor{
    .header{
      width:750/@rem;
      height:110/@rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .header_t{
        width:168/@rem;
        height:48/@rem;
        display: flex;
        align-items: center;
        .txt{
          font-size: 32/@rem;
          color: #666;
        }
        img{
          width:30/@rem;
          height:30/@rem;
          margin-left: 5/@rem;
        }
      }
    }
    .scroll{
      width:750/@rem;
      height:453/@rem;
      .scroll-container_d{
        display: flex;
        overflow: hidden;
        .list{
          display: flex;
          .item{
            width:575/@rem;
            height:417/@rem;
            margin-left: 30/@rem;
            img{
              width: 575/@rem;
              height:322/@rem;
              margin-bottom: 20/@rem;
            }
            .txt_a{
              font-size: 26/@rem;
              height:41/@rem;
              .price{
                color: firebrick;
                float: right;
              }
            }
            .txt_b{
              font-size: 24/@rem;
              height:36/@rem;
              color: #7f7f7f;
            }
          }
        }
      }
    }
  }
</style>
