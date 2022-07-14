<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/affiche1">Affiche 1</router-link> |
    <router-link to="/affiche2">Affiche 2</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #0DABE3;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: aliceblue;
}
</style>
