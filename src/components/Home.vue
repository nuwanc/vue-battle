<template>
  <div class="home-container">
        <h1>{{msg}}</h1>
        <router-link to="/battle" class="button">
                Battle
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Github Battle:Battle your friends and Stuff...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
