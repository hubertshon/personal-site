<template>
  <div id="app">
    <Nav />

    <b-container class="container">
      <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animted fadeOut">
        <router-view>
        </router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "http://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: Avenir, Raleway, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e7e7e7;
  margin-top: 1rem;
  height: 100vh;
  width: 100%;
}

body {
  background-color: #2d3845;
  background-image: radial-gradient(circle at 100% -20%, #5c7578, #496168, #394e58, #2b3b48, #1e2937);
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;

}

.container {
  height: 100%;
}

.animated {
  animation-duration: 1s;
}

</style>
