<template>
  <div>
    <ul class="footer">
      <li class="item">
        <a href="/">
          <i class="icon"></i>
          <span class="txt">网易自营品牌</span>
        </a>
      </li>
      <li class="item">
        <a href="/">
          <i class="icon"></i>
          <span class="txt">30天无忧退货</span>
        </a>
      </li>
      <li class="item">
        <a href="/">
          <i class="icon"></i>
          <span class="txt">48小时快速退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/ximins";
  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 72/@rem;
    display: flex;
    align-items: center;
    padding:0 30/@rem;
    .item {
      flex: 1;
      margin-left: 8/@rem;
      .icon {
        display: inline-block;
        width: 32/@rem;
        height: 32/@rem;
        background-image: url("./icon/arrow.png");
        background-size: 100% 100%;
        vertical-align: middle;//垂直居中
      }
      .txt {
        display: inline-block;
        font-size: 12/@rem;
        line-height: 32/@rem;
        color: #333;
        vertical-align: middle;
      }
    }
  }
</style>
