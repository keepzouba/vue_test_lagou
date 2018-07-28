<template>
  <div id="bottom">
    <ul>
      <router-link tag="li" :to="{}">职位</router-link>
      <router-link tag="li" :to="{name:'search'}">搜索</router-link>
      <router-link tag="li" :to="{}">我的</router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'vbottom'
  }
</script>
<style scoped="">
  @import "../../static/bottom.css";
</style>
