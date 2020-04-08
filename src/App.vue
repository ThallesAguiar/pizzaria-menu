<template>
  <div id="app">
    <Navigation />
    <LigarBotao />

    <router-view />
    <Rodape />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import LigarBotao from "@/components/LigarBotao";
import Rodape from "@/components/Rodape.vue";
export default {
  components: {
    Navigation,
    LigarBotao,
    Rodape
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  background-image: url("./assets/fundo.jpg");
  background-repeat: repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
