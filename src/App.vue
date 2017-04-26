<template>
  <div>
  <h1><span class="glyphicon glyphicon glyphicon-th-list" aria-hidden="true"></span> Trello Board using Vue JS</h1>
  <div class="wrapper">
  <div id="app">
    <!--<img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  background-color: #fff;
}
h1, h2 {
  font-weight: normal;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  min-width: 3000px;
  overflow-x: scroll;
}
.wrapper {
  width: 95%;
  overflow-x: scroll;
  margin:auto;
}
</style>
