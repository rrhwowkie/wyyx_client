<template>
  <div class="m-MsiteFloor">
    <div class="m-time">
      <div class="m-timeW">
        <!--左-->
        <div class="tLeft">
          <div class="tTxt">严选限时购</div>
          <div class="tTime">
            <span class="hours time">00</span>
            <span class="colon">：</span>
            <span class="mins time">00</span>
            <span class="colon">：</span>
            <span class="s time">00</span>
          </div>
          <div class="tStart">下一场10：00开始</div>
        </div>
        <!--右-->
        <div class="tRight">
          <div class="goodsImg">
            <img src="./images/e3c419bc0bb86a6ff351c6335ce30685.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="tu">
      <img src="./images/tu.jpg" alt="">
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/ximins";
  .m-MsiteFloor{
    .m-time{
      width:750/@rem;
      height:380/@rem;
      position: relative;
      /*background: lightblue;*/
      .m-timeW{
        display: flex;
        width:654/@rem;
        height:320/@rem;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
       /* background: #42b983;*/
        .tLeft{
          display: block;
          width:334/@rem;
          height:320/@rem;
          .tTxt{
            font-size: 36/@rem;
            /*word-spacing: 80/@rem;*/
            letter-spacing: 15/@rem;
            padding-top: 80/@rem;
          }
          .tTime{
            display: block;
            width:334/@rem;
            height:56/@rem;
            font-size: 30/@rem;
            color: #ffffff;
            word-spacing: -10/@rem;
            .hours,.mins,.s{
              display: inline-block;
              line-height:56/@rem;
              text-align: center;
              border-radius: 5/@rem;
              width: 62/@rem;
              height: 56/@rem;
              background-color: #444;
              margin-top: 20/@rem;
            }
            .colon{
              color: black;
            }
          }
          .tStart{
            font-size:24/@rem;
            margin-top: 50/@rem;
          }
        }
        .tRight{
          width:320/@rem;
          height:320/@rem;
          .goodsImg{
            img{
              width:320/@rem;
              height:320/@rem;
              /*width: 100%;
              height: 100%;*/
            }
          }
        }
      }
    }
    .tu{
      margin-top: 20/@rem;
      width:750/@rem;
      height:300/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
