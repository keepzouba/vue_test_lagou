<template>
  <div id="searchResult">
    <ul>
      <li class="item" v-for="item in searchResult" :key='item.positionId' @click="into_details(item.positionId)">
        <img :src='imghead+item.companyLogo' class="item-logo">
        <div class="item-desc">
          <h2 class="item-title">{{item.companyName}}</h2>
          <p class="item-info">
            <span class="item-pos">
              {{item.positionName}} [{{item.city}}]
            </span>
            <span class="item-salary">{{item.salary}}</span>
          </p>
          <p class="item-time">{{item.createTime}}</p>
        </div>
      </li>
    </ul>
    <div v-if="bottom_show">
      <div class="activeable list-more" @click="getmore">加载更多</div>
      <div id="copyright">
        <p>©2015 lagou.com, all right reserved </p>
        <div class="copyright-item">
          <span class="phone active">移动版&nbsp;·&nbsp;</span>
          <span class="computer">电脑版&nbsp;·&nbsp;</span>
          <a href="#header">回顶部</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'searchResult',
    data:function () {
      return{
        imghead:'//www.lgstatic.com/',
        arr:[]
      }
    },
    computed:{
      searchResult:function () {
        return this.$store.state.searchResult
      },
      bottom_show:function () {
        let l_searchResult = this.$store.state.searchResult.length;
        return l_searchResult>0?true:false
      }
    },
//    updated:function(){
//      console.log(this.$store.state.searchResult);
//      this.arr.concat(this.$store.state.searchResult);
//    },
    methods:{
      getmore:function () {
        this.$store.commit('searchMore');
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
      },
      into_details:function (str) {
        //https://m.lagou.com/jobs/3955529.html
        window.location='https://m.lagou.com/jobs/'+str+'.html'
      }
//      show:function () {
//        console.log(this.$store.state);
//      }
    }
  }
</script>
<style scoped="">
  @import "../../static/searchResult.css";
</style>
