<template>
    <section class="ads">
        <a href="">
            <img :src="adsData" alt="">
        </a>
    </section>
</template>
<script>
export default {
  props: ['adsData']
}
</script>
<style lang="scss" scoped>
.ads {
  width: 2.94rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 0.25rem;
  a {display: block;}
  img {display: block;height: 0.85rem;}
}
</style>
