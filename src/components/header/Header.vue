<template>
  <div class="header-wrapper">
    <Nav />
    <Search />
  </div>
</template>

<script>
import Nav from './Nav'
import Search from './Search'
export default {
  name: 'headers',
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
