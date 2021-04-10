<template>
  <div class="search-wrapper">
    <router-link class="logo" to="#">練習購物</router-link>
    <form class="search-bar">
      <div class="input-container">
        <input type="text" />
        <button class="search-button">
          <img src="@assets/img/search-interface-symbol.svg" alt="searchIcon" />
        </button>
      </div>
    </form>
    <div class="shopping-cart">
      <img src="@assets/img/shopping-cart.svg" alt="購物車">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: $base-distance;
  align-items: center;
  .logo {
    font-size: $base-distance * 4;
    color: #fff;
    display: flex;
    align-items: center;
    padding: $base-distance * 2 0;
    text-decoration: none;
    &::before {
      content: "";
      display: inline-block;
      background-image: url("~@assets/img/shopping-bag.svg");
      background-repeat: no-repeat;
      margin-right: $base-distance / 2;
      min-width: $base-distance * 4;
      min-height: $base-distance * 4;
    }
  }
  .search-bar {
    flex: 1;
    padding:0 $base-distance * 6;
    .input-container {
      width: 100%;
      position: relative;
      min-height: $base-distance * 5;
      input {
        width: 100%;
        min-height: $base-distance * 5;
        padding: $base-distance / 2;
        border-color: transparent;
      }
      .search-button {
        height: calc(100% - #{$base-distance});
        width: 7%;
        background: $main-color;
        position: absolute;
        right: 0;
        top: 0;
        margin: $base-distance / 2;
        border: 0;
        padding: 0;
        img {
          display: block;
          position: absolute;
          height: 100%;
          width: 25%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .shopping-cart{
    max-width: $base-distance * 5;
    max-height: $base-distance * 5;
    margin-left: $base-distance * 3;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
