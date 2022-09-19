<template>
  <div class="nav-container">
    <b-row align-h="center">
      <!-- <b-col>
        <div 
          id="leftArrow" 
          class="d-flex direction-button justify-content-end align-content-center" 
          @click="flipPage($event)">
          <font-awesome-icon 
            id="leftArrow" 
            icon="fa-solid fa-chevron-left" 
            class="directions ml-5" 
          />
        </div>
      </b-col> -->
      <b-col class="d-flex justify-content-center align-content-middle">
          <span class="nav-button"><router-link to="/">Home</router-link></span>
      </b-col>
      <b-col class="d-flex justify-content-center align-content-middle">
          <span class="nav-button"><router-link to="/about">About</router-link></span>
        </b-col>
        <b-col class="d-flex justify-content-center align-content-middle">
          <span class="nav-button"><router-link to="/projects">Projects</router-link></span>
        </b-col>
        <b-col class="d-flex justify-content-center align-content-middle">
          <span class="nav-button"><router-link to="/contact">Contact</router-link></span>
          </b-col>
    </b-row>
  </div>
</template>

<script>
// import router from '../router/index.js'

export default {
  name: 'Nav',
  props: {},
  data:() => ({
    // currentPage: '',
    // pageRoutes: ['/', '/about', '/projects', '/contact']
  }),
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  margin: 0 auto 3rem auto;
  max-width: 65%;
  height: 4vh;
}



.nav-button {
  /* margin-top: 0;
  margin-bottom: 0; 
  margin-left: 0.5rem;
  margin-right: 0.5rem; */
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.85em;
  font-weight: 500;
}

.nav-button:hover {
  color: #ffffff;
  text-decoration: none;
}

@media only screen and (max-width: 414px) {
  .nav-container {
    max-width: 90%
  }

  .nav-button {
    letter-spacing: 0.25em;
    font-size: 0.75em;
  }
}

a {
  color: #acacac;
  font-family: "Raleway", sans-serif;
  /* font-weight: 500; */
}

a:hover {
  color: #FFFFFF;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #ffc14e;
}

.directions {
  font-size: 2em;
  color: #FCCA6C;
  /* // color: #FBCB71; */
  pointer-events: none;
}

.direction-button {
  opacity: 0.15;
  height: 65px;
  font-size: 0.5em;
  cursor: pointer;
}

.direction-button:hover {
  opacity: 1;
  transition: opacity 0.6s ease-out;
}
</style>
