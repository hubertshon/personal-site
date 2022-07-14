<template>
  <div id="app">
    <Nav />

    <b-container class="container">
        <router-view></router-view>
        <Quote :quoteNumber="1" />

    </b-container>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Quote from './components/Quote.vue'

export default {
  name: 'App',
  components: {
    // Main,
    Nav,
    Quote
  },
  data: () => ({
  }),
  created() {
  },
  mounted() {
    // this.startTab();
  
  },
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
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
  // background-image: radial-gradient(circle, );

// background-image: radial-gradient(circle, );
// .gradient {
//   position: absolute; 
//   top: 0px; 
//   right: 0px;
//   height: 800px;
//   width: 800px;
//   background: radial-gradient(closest-side at 100px 100px, rgb(150, 150, 150) 0%, rgba(45, 56, 69, 0) 39%);
//   opacity: 0.3;
// }
</style>
