<template>
  <div class="m-MsiteFloor">
    <header class="header">
      <h3 class="title">家居好物</h3>
    </header>
    <div class="goods">
      <ul class="list">
        <li class="item">
          <img src="/static/images/1.png" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/2.jpg" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/1.png" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/2.jpg" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/1.png" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/2.jpg" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
        <li class="item">
          <img src="/static/images/1.png" alt="">
          <div class="item_txt_a">透气吸汗麻+亲肤柔软棉</div>
          <div class="item_txt_b">自然棉麻四件套</div>
          <div class="item_txt_c">¥459</div>
        </li>
       <!-- <li class="item">
          <p class="txt">更多居家好物</p>
          <i class="icon"></i>
        </li>-->
      </ul>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/ximins";
  .m-MsiteFloor{
    background-color: #ffffff;
    .header{
      width: 750/@rem;
      height: 120/@rem;
      .title{
        font-size: 32/@rem;
        color: #666;
        line-height: 120/@rem;
        text-align: center;
      }
    }
    .goods{
      box-sizing: border-box;
      width: 100%;
      /*width: 750/@rem;*/
      height: 2198/@rem;
      .list{
     /*   display: flex;*/
        /*width: 750/@rem;
        height: 2198/@rem;*/
        .item{
          display: inline-block;
          margin-left: 15/@rem;
          width: 345/@rem;
          height: 537/@rem;
          float: left;//加浮动 可以让中间的空白小一点
          img{
            width: 100%;
            height: 345/@rem;
            background-color: #f4f4f4;
          }
          .item_txt_a{
           /* width: 345/@rem;*/
            background-color: darkseagreen;
            font-size: 24/@rem;
            color: seagreen;
            line-height: 69/@rem;
            text-align: left;
           /* padding-left: 20/@rem;*/

          }
          .item_txt_b{
            /*width: 345/@rem;*/
            font-size: 26/@rem;
            color: #666;
            line-height: 48/@rem;
            text-align: left;
            margin-top: 10/@rem;
          }
          .item_txt_c{
            /*width: 345/@rem;*/
            font-size: 30/@rem;
            color: firebrick;
          }
          /*.txt{
            font-size: 30/@rem;
            display: inline-block;
            line-height: 32/@rem;
            text-align: center;
          }
          .icon{
            width: 67/@rem;
            height: 67/@rem;
            background-image: url("./images/r.png");
            background-size: 100% 100%;
          }*/
        }
      }
    }
    .blank{
      width: 750/@rem;
      height: 750/@rem;
    }
  }
</style>
