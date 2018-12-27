<template>
  <div id="home" @touchmove.prevent>
    <home-header></home-header>
    <home-tab></home-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
