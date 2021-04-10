<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/header/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
.main-container{
  max-width: 1280px;
  margin: 0 auto;
}
</style>
