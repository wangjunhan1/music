<template>
  <div class="header">
    <div class="icon"><img class="icon-img" :src="image"></div>
    <div class="title">SongTaste</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      image: require('common/image/default.png')
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  display: flex
  justify-content:center
  color: #C6A300
  height: 2.5rem
  line-height: 2.5rem
  .icon
    height: 2.5rem
    .icon-img
      width: 2rem
</style>
