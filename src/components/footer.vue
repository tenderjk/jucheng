<template>
    <footer>
        <ul>
            <router-link tag="li" :to="{ name: 'home' }">
              <span class="iconfont icon-shouye"></span>
              <p>首页</p>
            </router-link>
           <router-link tag="li" :to="{ name: 'theatre' }">
              <span class="iconfont icon-gejuyuan"></span>
              <p>剧院</p>
            </router-link>
            <router-link tag="li" :to="{ name: 'collect' }">
              <span class="iconfont icon-piaojia"></span>
              <p>收藏</p>
            </router-link>
            <router-link tag="li" :to="{ name: 'user' }">
              <span class="iconfont icon-iconfuzhi"></span>
              <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
@import url('//at.alicdn.com/t/font_1225232_e28vy1kaiqv.css');
footer {
    @include flex(0 0 0.5rem);
    width: 100%;
ul {
    @include flexbox();
    width: 100%;
    justify-content: space-between;
        li {
            span {
              display: block;
              width: 0.4rem;
              height: 0.4rem;
              font-size: 0.4rem;
              line-height: 0.4rem;
              &:before {
                font-size: 0.2rem;
              }
            }
            &.router-link-exact-active.router-link-active {
              color: red
            }
        }
    }
}
</style>
