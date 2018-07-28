<template>
  <div id="search">
    <div class="search">
      <div class="lbutton">
        <router-link tag="span" class="city" :to="{name:'city'}">{{$store.state.city}}</router-link>
        <span class="cityicon"></span>
      </div>
      <div class="rinput">
        <input class="inputer" type="text" placeholder="搜索职位或公司" v-model="val">
        <span class="search" @click="search"><em class="searchicon"></em></span>
      </div>
    </div>
    <v-searchResult></v-searchResult>
    <router-view></router-view>
  </div>
</template>
<script>
  import searchResult from './searchResult.vue'
  export default {
    name:'search',
    data:function () {
      return{
        val:""
      }
    },
    methods:{
      search:function () {
        //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=k&pageNo=1&pageSize=15
        console.log(encodeURIComponent(this.$store.state.city));
        let url  = '/search/search.json';
        this.$http.get(url,{params:
          {
            city:this.$store.state.city,
            positionName:this.val,
            pageNo:this.$store.state.spageNo,
            pageSize:this.$store.state.spageSize
          }}).then(res=>{
          let result = res.data.content.data.page.result;
          this.$store.commit('searchResult',result)
        })
      }
    },
    components:{
      'v-searchResult':searchResult
    }
//    computed:{
//      pageNo:function () {
//        return this.$store.state.spageNo
//      },
//      pageSize:function () {
//        return this.$store.state.spageSize
//      }
//    }
  }
</script>
<style scoped="">
  @import "../../static/search.css";
</style>
