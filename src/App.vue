<template>
  <div id="app">
    <Header />
    <router-view/>
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
</style>
