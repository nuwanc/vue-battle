<template>
  <div id="app" class="container">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
ul {
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color:#d0021b;
}

.button {
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  display: block;
  padding: 7px 0;
  margin: 10px auto;
}

.button:hover:enabled {
  background: linear-gradient(#1a1a1a,#0a0a0a);
  color: #fff;
  text-decoration: none;
}

.button:active {
  transform: translateY(1px);
}
</style>
