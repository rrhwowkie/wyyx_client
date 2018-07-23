<template>
  <!--首页头部的logo和搜索框-->
  <div class="nav-header">
    <header>
      <a href="/" class="logo"></a>
      <div class="search">
        <i class="icon"></i>
        <span class="search-content">搜索商品，共10856款好物</span>
      </div>
    </header>
    <div class="scroll">
      <div class="scroll-container">
        <div class="list">
          <div class="tab active">
            <span class="txt">推荐</span>
            <!--::after-->
          </div>
          <div class="tab">
            <span class="txt">居家</span>
          </div>
          <div class="tab">
            <span class="txt">鞋包配饰</span>
          </div>
          <div class="tab">
            <span class="txt">服装</span>
          </div>
          <div class="tab">
            <span class="txt">电器</span>
          </div>
          <div class="tab">
            <span class="txt">洗护</span>
          </div>
          <div class="tab">
            <span class="txt" :class="">饮食</span>
          </div>
          <div class="tab">
            <span class="txt">餐具</span>
          </div>
          <div class="tab">
            <span class="txt">童婴</span>
          </div>
          <div class="tab">
            <span class="txt">文体</span>
          </div>
          <div class="tab">
            <span class="txt">特色区</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll('.scroll-container', {
        scrollX : true
      })
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/ximins";
  .nav-header{
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 5;
    left:0;
    top:0;
    header{
      display: flex;
      align-items: center;
      padding: 16/@rem 20/@rem;
      .logo{
        width:138/@rem;
        height: 40/@rem;
        display: block;
        margin-right: 30/@rem;
        background-image: url("./images/logo.png");
        /*background-repeat: no-repeat;*/
        background-position: center;
        background-size: cover;
      }
      .search{
        display: flex;
        flex-grow: 1;
        align-items: center;//水平居中 （侧轴对齐方式）
        justify-content: center;//垂直居中
        width: 532/@rem;
        height: 56/@rem;
        font-size: 28/@rem;
        background-color: #ededed;
        border-radius: 8/@rem;
        .icon{
          display: block;
          vertical-align: middle;//行内块元素需要设置 垂直对齐
          width:28/@rem;
          height:28/@rem;
          margin-right: 5/@rem;
          background-image: url("./images/search.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .search-content{
          display: block;
          color: #666;

        }
      }
    }
    .scroll{
      background: #fff;
      .scroll-container{
        display: flex;
        overflow: hidden;
        .list{
          display: flex;
          flex-shrink: 0;//保证文字在同一行
          padding:0 50/@rem;
          .tab{
            position: relative;
            margin-left: 75/@rem;
            &.active{
              color: #b4282d;
              margin-left: 0;
              &::after{
                content: '';
                background-color: #b4282d;
                position: absolute;
                left:0;
                bottom:0;
                width: 100%;
                height: 5/@rem;
              }

            }
            .txt{
              display: inline-block;
              color: #333;
              font-size: 28/@rem;
              text-align: center;
              line-height:60/@rem;
            }
          }
        }
      }

    }
  }
</style>
