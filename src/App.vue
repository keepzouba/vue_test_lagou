<template>
  <div id="app">
    <v-head></v-head>
    <v-bottom></v-bottom>
    <router-view/>
  </div>
</template>

<script>
  import bottom from './components/bottom.vue'
  import head from './components/head.vue'
export default {
  name: 'App',
  components:{
    'v-bottom':bottom,
    'v-head':head,
  }
}
</script>

<style>

</style>
