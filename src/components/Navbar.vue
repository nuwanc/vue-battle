<template>
  <ul class='nav'>
            <li>
            <router-link exact to="/">
                Home
            </router-link>
            </li>
            <li>
            <router-link exact to="/battle">
                Battle
            </router-link>
            </li>
            <li>
            <router-link to="/popular">
                Popular
            </router-link>
            </li>
        </ul>
</template>
<script>
export default {
  name: 'navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    display: flex;
}

.active {
    font-weight: bold;
}

.nav li {
    margin-right: 15px;
}
</style>