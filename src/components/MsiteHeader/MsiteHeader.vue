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
  </div>
</template>
<script>
  export default {}
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
          vertical-align: middle;
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
  }
</style>
