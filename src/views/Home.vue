<template>
  <div id="home" class="container">
    <swipe :bannerList="bannerList"/>
    <classify :classifyList="classifyList" />
    <ads :adsData="adsData" />
    <operation :operationList="operationList" />
    <hotshow :hotshowList="hotshowList"/>
    <section class="categoryContain">
      <category v-for="item in categoryList" :categoryList="item" :key="item.cat_id" />
    </section>
    <recommand :recommandLink="recommandLink"/>
  </div>
</template>

<script>
// @ is an alias to /src
import swipe from '@/components/index/swipe'
import classify from '@/components/index/classify'
import ads from '@/components/index/ads'
import operation from '@/components/index/operation'
import hotshow from '@/components/index/hotshow'
import category from '@/components/index/category'
import recommand from '@/components/index/recommand'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    swipe,
    classify,
    ads,
    operation,
    hotshow,
    category,
    recommand
  },
  data () {
    return {
      bannerList: null,
      classifyList: null,
      adsData: null,
      operationList: null,
      hotshowList: null,
      categoryList: null,
      recommandLink: 'https://m.juooo.com/home/getRecommendShow?cityAdd=SH&version=5.1.4&referer=2'
    }
  },
  async mounted () {
    // 轮播图数据
    let bannerData = await axios.get('https://m.juooo.com/home/getSildeList?abbreviation=SH&limit=version=5.1.3&referer=2&timestamp=' + new Date().getTime())
    bannerData = bannerData.data.data.silde_list.slice(0, bannerData.data.data.silde_list.length - 2)
    this.bannerList = bannerData
    // console.log(bannerData)
    // 头部导航与橙plus数据
    let classifyData = await axios.get('https://m.juooo.com/home/getClassifyItem?city_id=4&operation_limit=5&version=5.1.3&referer=2&timestamp=' + new Date().getTime())
    classifyData = classifyData.data.data
    this.classifyList = classifyData.classify_list
    this.operationList = classifyData.operation_list
    // 广告数据
    let adsData = await axios.get('https://m.juooo.com/home/getAd?city_id=4&version=5.1.3&referer=2&timestamp=' + new Date().getTime())
    adsData = adsData.data.data.advert1[0].pic
    this.adsData = adsData
    // console.log(this.adsData)
    let hotshowData = await axios.get('https://m.juooo.com/home/getHotsRecommendList?city_id=4&rows=50&version=5.1.3&referer=2&timestamp=' + new Date().getTime())
    hotshowData = hotshowData.data.data.hots_show_list
    this.hotshowList = hotshowData.slice(0, 10)
    // 分类数据
    let categoryData = await axios.get('https://m.juooo.com/home/getFloorShow?city_abb=SH&city_id=4&version=5.1.3&referer=2&timestamp' + new Date().getTime())
    categoryData = categoryData.data.data
    this.categoryList = categoryData
  }
}
</script>
