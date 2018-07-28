<template>
  <div id="home">
    <v-tips></v-tips>
    <v-position></v-position>
    <router-view></router-view>
  </div>
</template>
<script>
  import tips from './tips.vue'
  import position from './position.vue'

  export default {
    name:'home',
    components:{
      'v-tips':tips,
      'v-position':position
    },
    mounted:function () {

    }
  }
</script>
<style scoped="">
  @import "../../static/home.css";
</style>
