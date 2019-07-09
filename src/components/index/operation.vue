<template>
  <section class="operation">
    <ul class="operation1">
      <li v-for="(item, index) in operationPart1" :key="index">
        <div class="content">
          <h4>{{item.name}}</h4>
          <p v-html="item.describe"></p>
        </div>
        <div class="icon">
          <img :src="item.pic" alt="" />
        </div>
      </li>
    </ul>
    <ul class="operation2">
      <li v-for="(item, index) in operationPart2" :key="index">
        <div class="content">
          <h4>{{item.name}}</h4>
          <p v-html="item.describe"></p>
        </div>
        <div class="icon">
          <img :src="item.pic" alt="" />
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['operationList'],
  data () {
    return {
      operationPart1: [],
      operationPart2: []
    }
  },
  // watch: {
  //   operationList (val) {
  //     this.operationPart1 = val.slice(0, 2)
  //     this.operationPart2 = val.slice(2)
  //     // console.log(val)
  //     // return this.$props.operationlist.slice(0,2)
  //   }
  // },
  mounted () {
    this.operationPart1 = this.$props.operationList.slice(0, 2)
    this.operationPart2 = this.$props.operationList.slice(2)
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.operation {
  background: #f5f5f5;
  padding:0.05rem 0.01rem;
  li {background: #fff;}
  .c_ff6 {
          color: #ff6743;
        }
  .icon {
        margin: 0 auto;
        @include rect(0.4rem,0.4rem);
        img {
          display: block;
          @include rect(0.4rem,0.4rem);
        }
      }
  margin: 0.2rem 0.05rem;
  .operation1 {
    margin:0 0 0.05rem;
    @include flexbox();
    justify-content: space-around;
    width: 100%;
    li {
      @include flexbox();
      align-items: center;
      justify-content: space-between;
      @include rect(auto,0.78rem);
      padding: 0.1rem 0.1rem;
      @include flex(0 0 49%);
      .content {
        @include rect(0.8rem,auto);
        font-size: 0.14rem;
        p {font-size: 0.1rem;}
      }
    }
  }
  .operation2 {
    @include flexbox();
    justify-content: space-around;
    width:100%;
    li {
      @include flex(0 0 32%);
      text-align: center;
      @include rect(auto,0.96rem);
      @include flexbox();
      flex-direction: column;
      align-items: center;
      p {font-size: 0.1rem;}
      justify-content: center;
    }
  }
}
</style>
