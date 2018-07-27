<template>
  <div class="m-pinpai">
    <header>
      <a href="">
        <span class="txt">品牌制造商直供</span>
        <i class="icon"></i>
      </a>
    </header>
    <div class="m-pinpaiGoods">
      <ul class="list">
        <li class="item">
          <a href="">
            <div class="cnt">
              <h4 class="title">CK制造商</h4>
              <div class="price_wrapper">
                <span class="price">25元起</span>
              </div>
            </div>
            <img src="./images/1.png" alt="">
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="cnt">
              <h4 class="title">CK制造商</h4>
              <div>
                <span class="price1">25</span>
                <span class="price2">元</span>
              </div>
            </div>
            <img src="./images/2.png" alt="">
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="cnt">
              <h4 class="title">CK制造商</h4>
              <div>
                <span class="price1">25</span>
                <span class="price2">元</span>
              </div>
            </div>
            <img src="./images/3.png" alt="">
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="cnt">
              <h4 class="title">CK制造商</h4>
              <div>
                <span class="price1">25</span>
                <span class="price2">元</span>
              </div>
            </div>
            <img src="./images/4.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/less/ximins";
  .m-pinpai{
    background-color: #ffffff;
    header{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 110/@rem;
      a{
        .txt{
          font-size:32/@rem;
          color: #333;
        }
        .icon{
          display: inline-block;
          vertical-align: middle;
          width: 30/@rem;
          height:30/@rem;
          background-image: url("./images/right.png");
          background-repeat: no-repeat;
          background-size: cover;
          margin-left: 5/@rem;
        }
      }
    }
    .m-pinpaiGoods{
      box-sizing: border-box;
      width:100%;
      .list{
        margin: 0 8/@rem;
        .item{
          display: inline-block;
          margin-right: 1/@rem;
          margin-bottom: 10/@rem;
          background-color:#f4f4f4;
          a{
            font-size: 16/@rem;
            color: #333;
            position: relative;
            width: 354/@rem;
            height:236/@rem;
            display: inline-block;
            .cnt{
              position: absolute;
              top:10/@rem;
              left: 10/@rem;
              margin-bottom: -10/@rem;
              margin-left: 20/@rem;
              .title{
                margin-bottom: 10/@rem;
              }
              .price_wrapper{
                .price{
                }
              }
            }
            img{
              width: 354/@rem;
              height:236/@rem;
              position: absolute;
              top:0;
              left:0;
            }
          }
        }
      }
    }
  }
</style>
