<template>
  <div id="app">
    <Nav />
    <div class="d-flex justify-content-between align-items-center" style="height: 100%;">

      <div id="leftArrow" class="direction-button" @click="flipPage($event)">
        <font-awesome-icon 
          id="leftArrow" 
          icon="fa-solid fa-chevron-circle-left" 
          class="directions ml-5" 
        />
      </div>
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

      <div id="rightArrow" class="direction-button" @click="flipPage($event)">
        <font-awesome-icon 
          icon="fa-solid fa-chevron-circle-right"
          class="directions mr-5" 
        />
      </div>

    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import router from './router/index.js'



export default {
  name: 'App',
  components: {
    Nav
  },
  data:() => ({
    currentPage: '',
    pageRoutes: ['/', '/about', '/projects', '/life']
    
  }),
  mounted() {
    this.currentPage = this.$router.currentRoute.path;
  },
  methods: {
    flipPage(event) {
      const clickDirection = event.target.id;
      const currentIndex = this.pageRoutes.findIndex((element) => {
        return element === this.currentPage;
      });

      let indexToNavigate;
      if (clickDirection === 'rightArrow') {
        indexToNavigate = currentIndex + 1;
      } else {
        indexToNavigate = currentIndex - 1;
      }

      if (indexToNavigate + 1 > this.pageRoutes.length) {
        indexToNavigate = 0;
      }

      router.push(this.pageRoutes[indexToNavigate]);
      this.currentPage = this.$router.currentRoute.path;
    }
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
  // height: 90%;
  width: 100%;
}

.animated {
  animation-duration: 1s;
}

.animated-out {
  opacity: 0;
}


.direction-button {
  opacity: 0.05;
  height: 65px;
  cursor: pointer;
}

.direction-button:hover {
  opacity: 1;
  transition: opacity 0.6s ease-out;
}

.directions {
  font-size: 2em;
  color: #FCCA6C;
  // color: #FBCB71;
  pointer-events: none;
}

</style>
