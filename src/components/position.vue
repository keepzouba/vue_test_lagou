<template>
  <div id="position">
    <ul>
      <li class="item" v-for="item in arr" :key='item.positionId'>
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
</template>
<script>
  export default {
    name: 'position',
    data:function () {
      return{
        pageNo:1,
        pageSize:15,
        arr:[],
        imghead:'//www.lgstatic.com/'
      }
    },
    mounted: function () {
      //http://m.lagou.com/listmore.json?pageNo=3&pageSize=15
      let url  = '/position/listmore.json';
      this.$http.get(url,{params:{pageNo:this.pageNo,pageSize:this.pageSize}}).then(res=>{
        this.arr = this.arr.concat(res.data.content.data.page.result);
      })
    },
    methods:{
      getmore:function () {
        this.pageNo++;
        let url  = '/position/listmore.json';
        this.$http.get(url,{params:{pageNo:this.pageNo,pageSize:this.pageSize}}).then(res=>{
          this.arr = this.arr.concat(res.data.content.data.page.result);
        })
      }
    }
  }
</script>
<style scoped="">
  @import "../../static/position.css";
</style>
