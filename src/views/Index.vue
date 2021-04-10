<template>
  <div class="index-container">
    <div class="index-header">
      <div class="carousel-wrapper">
        <div class="carousel">
          <img src="@assets/img/pexels-pixabay-163046.jpg" alt="">
        </div>
        <div class="promotion">
          <div class="img-wrapper">
            <img src="@assets/img/pexels-pixabay-163046.jpg" alt="">
          </div>
          <div class="img-wrapper">
            <img src="@assets/img/pexels-pixabay-163046.jpg" alt="">
          </div>
        </div>
      </div>
      <ul class="item-list">
        <li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li>
        <li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li><li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li>
        <li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li>
        <li>
          <div class="img-wrapper">
            <img src="@assets/img/shop.svg" alt="">
          </div>
          <p>免運！蝦皮直送</p>
        </li>
      </ul>
    </div>
    <div class="index-main">
      <div class="category">
        <p class="title">分類</p>
        <ul>
          <li v-for="num of 20" :key="num">
            <div>
              <img src="@assets/img/shop.svg" alt="">
            </div>
            <p>戶外與運動用品</p>
          </li>
        </ul>
      </div>
      <div class="hot-product">
        <div class="title">
          <p>熱門商品</p>
          <p>查看全部 〉</p>
        </div>
        <ul class="content">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Index',
  components: {
    ProductCard
  }
}
</script>

<style lang="scss" scoped>
  .index-container{
    width: 100%;
    margin-top: $base-distance * 6;
    background-color: rgb(243, 243, 243);
    .index-header{
      width: 100%;
      background-color: #fff;
      padding-bottom: $base-distance * 2;
      .carousel-wrapper{
        width: 100%;
        max-height: 235px;
        display: flex;
        .carousel{
          flex: 2;
          margin-right: $base-distance;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .promotion{
          flex: 1;
          .img-wrapper{
            width: 100%;
            height: calc(50% - #{$base-distance / 2});
            &:nth-of-type(1){
              margin-bottom: $base-distance;
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .item-list{
        width: 100%;
        display: flex;
        list-style: none;
        justify-content: center;
        padding: 0;
        li{
          margin:0 $base-distance;
          flex:1;
          text-align: center;
          .img-wrapper{
            max-width: $base-distance * 6;
            max-height: $base-distance * 6;
            border: 1px solid #000;
            border-radius: 10px;
            padding: $base-distance;
            margin: $base-distance auto;
            img{
              width: 100%;
              height: 100%;
            }
          }
          p{
            margin: 0;
            padding: 0;
            font-size: 12px;
          }
        }
      }
    }
    .index-main{
      width: 100%;
      .category{
        width: 100%;
        .title{
          padding-left: $base-distance * 2;
        }
        ul{
          display: flex;
          list-style: none;
          flex-wrap: wrap;
          padding: 0;
          margin: 0;
          li{
            width: 10%;
            text-align: center;
            border: 1px solid #fff;
            border-left: 1px solid transparent;
            border-bottom: 1px solid transparent;
            padding: $base-distance * 6 0;
            cursor: pointer;
            &:hover{
              border: 1px solid rgb(207, 206, 206);
            }
            div{
              max-width: $base-distance * 5;
              max-height: $base-distance * 5;
              margin: 0 auto;
              img{
                width: 100%;
                height: 100%;
              }
            }
            p{
              margin-top: $base-distance * 4;
              font-size: 12px;
            }
          }
        }
      }
      .hot-product{
        width: 100%;
        background-color: #fff;
        padding-top: $base-distance * 4;
        margin-bottom: $base-distance * 4;
        .title{
          display: flex;
          width: 100%;
          justify-content: space-between;
          padding: $base-distance * 2;
          background-color: rgb(243, 243, 243);
          p{
            &:nth-of-type(2){
              font-size: 14px;
              color:$main-color;
            }
          }
        }
        .content{
          width: 100%;
          max-height: 324px;
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          background-color: rgb(243, 243, 243);
          li{
            padding: $base-distance * 3;
            padding-bottom: 0;
            border-top: 1px solid rgb(207, 206, 206);
            border-left: 1px solid rgb(207, 206, 206);
            &:nth-of-type(1){
              border-left: 1px transparent;
            }
          }
        }
      }
    }
  }
</style>
