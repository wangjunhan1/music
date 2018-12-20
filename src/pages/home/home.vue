<template>
  <div>
    <home-header></home-header>
    <home-tab></home-tab>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeTab from './components/tab.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeTab: HomeTab
  }
}
</script>
<style>
</style>
