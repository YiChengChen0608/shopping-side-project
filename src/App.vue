<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
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
