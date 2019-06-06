<template>
    <section class="classify">
      <ul>
        <li v-for="(item, index) in classifyList" :key="index">
          <img :src="item.pic" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
</template>
<script>
export default {
  props: ['classifyList']
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.classify {
  margin-top: 0.1rem;
  ul {
    @include flexbox();
    justify-content: space-around;
    width: 100%;
    li {
      span {height: 0.16rem;display: block;color: #000;}
      img {
        @include rect(0.43rem,0.43rem)
      }
    }
  }
}
</style>
