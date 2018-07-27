<template>
  <div class="m-indexFloor">
    <header>
      <a href="">
        <div class="txt-wrapper_a">
          <span class="h-txt_a">人气推荐 好物精选</span>
          <div class="txt-wrapper_b">
            <span class="txt-wrapper_c">
              <span class="h-txt_b">查看全部</span>
              <img class="icon" src="./img/right.png">
            </span>
          </div>
        </div>
      </a>
    </header>
    <div class="scroll">
      <div class="scroll-container_b">
        <ul class="list">
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥389</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="goods">
                <img src="./img/03.png" alt="">
              </div>
              <div class="goods-txt1">网易智造3D可逆循环扇</div>
              <div class="goods-txt2">创新可逆模式 空气对流循环</div>
              <div class="price">¥499</div>
            </a>
          </li>
          <li class="item">
            <a href="">
              <div class="look">
                <div class="lookAll">查看全部</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    mounted (){
      new BScroll('.scroll-container_b',{
        scrollX:true
      })
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/ximins";
  .m-indexFloor{
    background-color: #ffffff;
    header{
      width: 750/@rem;
      height:260/@rem;
      background: url("./img/bg.png");
      background-size: 750/@rem 260/@rem;
      margin-bottom: 30/@rem;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        color: #B4A078;
        display: flex;
        justify-content: center;
        align-items: center;

        .txt-wrapper_a{
          width: 320/@rem;
          height:126/@rem;
          /*
                    background: blue;
          */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .h-txt_a{
            font-size: 38/@rem;
          }
          .txt-wrapper_b{
            display: flex;
            flex-direction: column;//纵向
            align-items: center;
            justify-content: center;
            width:240/@rem;
            height:56/@rem;
            background-color: #F4E9CB;
            margin-top: 24/@rem;
            .txt-wrapper_c{
              display: flex;
              align-items: center;
              justify-content: center;
              .h-txt_b{
                font-size: 26/@rem;
              }
              .icon{
                width: 10/@rem;
                height: 22/@rem;
                margin: 12/@rem 0 5/@rem 5/@rem;
              }
            }
          }
        }
      }
    }
    .scroll{
      width:750/@rem;
      height:480/@rem;
      .scroll-container_b{
        display: flex;
        overflow: hidden;
        .list{
          display: flex;
          .item{
            width:280/@rem;
            height:414/@rem;
            margin-right: 10/@rem;
            margin-left: 15/@rem;
            a{
              color: #333;
              .goods{
                background-color:#f4f4f4;
                margin-bottom: 15/@rem;
                img{
                  width:280/@rem;
                  height:280/@rem;
                }
              }
              .goods-txt1{
                font-size:30/@rem;
                /*文字...隐藏*/
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .goods-txt2{
                font-size: 24/@rem;
                color: #7f7f7f;
                /*文字...隐藏*/
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 15/@rem auto;
              }
              .price{
                font-size:28/@rem;
                color: crimson;
              }
              .look{
                border: 10/@rem solid #f4f4f4;
                width: 280/@rem;
                height: 280/@rem;
                position: relative;
                /*margin-right:15/@rem;*/
                .lookAll{
                  position: absolute;
                  text-align: center;
                  left:35%;
                  top:45%;
                  /*margin:auto;*/
                  font-size: 28/@rem;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
