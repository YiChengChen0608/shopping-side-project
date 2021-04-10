<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="top-product">
        <img src="@assets/img/App.jpeg" alt="">
      </div>
      <div class="second-product">
        <div class="card-wrap">
          <img src="@assets/img/App.jpeg" alt="">
        </div>
        <div class="card-wrap">
          <img src="@assets/img/App.jpeg" alt="">
        </div>
      </div>
    </div>
    <p>MyCard 點數</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style lang="scss" scoped>
.card-wrapper{
    width: 100%;
    height: 100%;
  .card-container{
    width: 100%;
    height: 80%;
    display: flex;
    .top-product{
      flex: 1;
      margin-right: $base-distance;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .second-product{
      flex: 1;
      .card-wrap{
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
  p{
    margin:0;
    padding-top: $base-distance * 3;
  }
}
</style>
