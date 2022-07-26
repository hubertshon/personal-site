<template>
  <div id="app">
    <Nav />
    <div class="d-flex justify-content-between align-items-center" style="height: 100%;">

    <b-container class="container">
      <transition 
        name="router-anim" 
        enter-active-class="animated fadeIn" 
        leave-active-class="animated-out fadeOut"
      >
        <router-view>
        </router-view>
      </transition>
    </b-container>

    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  },
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
  // height: calc(100vh - 40px);
  height: 95vh;
  max-height: auto;
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
  width: 100%;
}

.animated {
  animation-duration: 1s;
}

.animated-out {
  opacity: 0;
}

</style>
