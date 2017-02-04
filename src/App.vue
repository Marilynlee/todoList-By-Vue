<template>
  <div id="app">
    <photo></photo>
    <hello  msg='TodoList by Vue.js'></hello>
  </div>
</template>

<script>
  import Photo from './components/Photo'
  import Hello from './components/Hello'
  export default {
    name: 'app',
    components: {Photo, Hello}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>
