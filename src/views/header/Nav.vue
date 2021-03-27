<template>
  <div class='nav-wrapper'>
    <div class="nav-left-area">
      <router-link to="#">賣家中心</router-link>
      <router-link to="#">下載</router-link>
      <p>追蹤我們</p>
    </div>
    <div class="nav-space"></div>
    <div class="nav-right-area">
      <router-link to="#">通知總覽</router-link>
      <router-link to="#">幫助中心</router-link>
      <router-link to="#">註冊</router-link>
      <router-link to="#">登入</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  width: 80%;
  padding: $base-distance;
  margin: 0 auto;
  display: flex;
  a{
    text-decoration: none;
  }
  .nav-left-area{
    display: flex;
    align-items: center;
    a{
      color: #fff;
      border-right : 2px solid rgba(220,220,220,.5);
      font-size: $base-distance * 1.5;
      padding: 0 $base-distance;
    }
    p{
      color: #fff;
      font-size: $base-distance * 1.5;
      margin: 0;
      padding: 0 $base-distance;
    }
  }
  .nav-space{
    flex: 1;
  }
  .nav-right-area{
    display: flex;
    align-items: center;
    a{
      color: #fff;
      font-size: $base-distance * 1.5;
      margin: 0;
      padding: 0 $base-distance;
      display: flex;
      align-items: center;
      &:nth-of-type(1){
        &::before{
          content: '';
          display: block;
          background-image: url('~@/assets/img/bell.svg');
          background-repeat: no-repeat;
          width: $base-distance * 2;
          height: $base-distance * 2;
          padding-right:$base-distance / 2;
        }
      }
      &:nth-of-type(2){
        &::before{
          content: '';
          display: block;
          background-image: url('~@/assets/img/doubts-button.svg');
          background-repeat: no-repeat;
          width: $base-distance * 2;
          height: $base-distance * 2;
          padding-right:$base-distance / 2;
        }
      }
      &:nth-of-type(3){
        border-right : 2px solid rgba(220,220,220,.5);
      }
    }
  }
}
</style>
