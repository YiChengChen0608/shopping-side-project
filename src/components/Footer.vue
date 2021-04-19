<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="title-wrapper">
        <p>關於我們</p>
        <ul>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
        </ul>
      </div>
      <div class="title-wrapper">
        <p>關於我們</p>
        <ul>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
        </ul>
      </div>
      <div class="title-wrapper">
        <p>關於我們</p>
        <ul>
          <li>關於我們</li>
          <li>關於我們</li>
        </ul>
      </div>
      <div class="title-wrapper">
        <p>關於我們</p>
        <ul>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
        </ul>
      </div>
      <div class="title-wrapper">
        <p>關於我們</p>
        <ul>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
          <li>關於我們</li>
        </ul>
      </div>
    </div>
    <p class="footer-copyright">
      © 2021。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-wrapper{
  width: 100%;
  background-color: rgb(243, 243, 243);
  padding: $base-distance * 3 0;
  .footer-container{
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
    .title-wrapper{
      flex: 1;
      ul{
        list-style: none;
        padding: 0;
        li{
         font-size: 12px;
         padding: $base-distance/2 0;
        }
      }
      p{
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  .footer-copyright{
    max-width: 1280px;
    margin: $base-distance*2 auto 0;
  }
}
</style>
