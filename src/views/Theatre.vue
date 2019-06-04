<template>
  <div id="theatre" class="container">
    <mt-cell title="剧院">
    </mt-cell>
    <section class="infoshowListContain">
      <infoshow v-for="(item,index) in infoshowList" :infoshowData="item" :key="index" />
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import infoshow from '@/components/theatre/infoshow'
export default {
  data () {
    return {
      infoshowList: []
    }
  },
  components: {
    infoshow
  },
  async mounted () {
    let infoshowList = await axios('https://m.juooo.com/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2')
    infoshowList = infoshowList.data.data.theatre_list
    this.infoshowList = infoshowList
  }
}
</script>
<style lang="scss">
#theatre {
  background: #fdfdfd;
}
</style>
