<template>
  <div id="user" class="container">
    <span>123</span>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (!localStorage.getItem('username')) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>
