<template>
  <footer class="footer_guide">
    <span class="guide_item" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont msite" :class="{on: '/msite' === $route.path}"></i>
      </span>
      <span class="txt" :class="{on: '/msite' === $route.path}">首页</span>
    </span>
    <span class="guide_item" @click="goTo('/look')">
      <span class="item_icon">
        <i class="iconfont shiwu" :class="{on: '/look' === $route.path}"></i>
      </span>
      <span class="txt" :class="{on: '/look' === $route.path}">识物</span>
    </span>
    <span class="guide_item" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont classify" :class="{on: '/classify' === $route.path}"></i>
      </span>
      <span class="txt" :class="{on: '/classify' === $route.path}">分类</span>
    </span>
    <span class="guide_item" @click="goTo('/shoppingcart')">
      <span class="item_icon">
        <i class="iconfont cart" :class="{on: '/shoppingcart' === $route.path}"></i>
      </span>
      <span class="txt" :class="{on: '/shoppingcart' === $route.path}">购物车</span>
    </span>
    <span class="guide_item" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont geren" :class="{on: '/profile' === $route.path}"></i>
      </span>
      <span class="txt" :class="{on: '/profile' === $route.path}">个人</span>
    </span>
  </footer>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      /*isCurrent(path){
        return this.$route.path === path
      }*/
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/ximins";
  .footer_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 98/@rem;
    display: flex;
    .guide_item{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      .item_icon{
        display: block;
        width: 40/@rem;
        height: 40/@rem;
        margin-top: 8/@rem;
        .iconfont{
          display: block;
          width: 100%;
          height: 100%;
          background-image: url("./images/footer.png");
          background-size:40/@rem 490/@rem;
        }
        .msite{
          background-position: 0 -250/@rem;
          &.on{
            background-position: 0 -200/@rem;
          }
        }
        .shiwu{
          background-position: 0 -350/@rem;
          &.on{
            background-position: 0 -300/@rem;
          }
        }
        .classify{
          background-position: 0 -150/@rem;
          &.on{
            background-position: 0 -100/@rem;
          }
        }
        .cart{
          background-position: 0 -50/@rem;
          &.on{
            background-position: 0 0;
          }
        }
        .geren{
          background-position: 0 -450/@rem;
          &.on{
            background-position: 0 -400/@rem;
          }
        }
      }
      .txt{
        text-align: center;
        display: block;
        margin-top: 8/@rem;
        font-size: 24/@rem;
        color: #999999;
        line-height: 1;
        &.on{
          color: #b4282d;
        }
      }
    }
  }
</style>
