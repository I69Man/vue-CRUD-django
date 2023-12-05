<template>
  <Navbar />
  <router-view class="container"/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
 export default {
  components: {
    Navbar
  },
  watch: {
    $route(){
      this.$store.commit('onStart')
    }
  },
  mounted(){
    this.$store.commit('onStart')
  }
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
