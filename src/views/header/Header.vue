<template>
  <div class="header-wrapper">
    <Nav />
    <Search />
  </div>
</template>

<script>
import Nav from '@/views/header/Nav'
import Search from '@/views/header/Search'
export default {
  name: 'header',
  components: {
    Nav,
    Search
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper{
  background-color: $main-color;
}
</style>
