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
              <span class="nav-button"><router-link to="/about">About</router-link></span>
              <span class="nav-button"><router-link to="/projects">Projects</router-link></span>
              <span class="nav-button"><router-link to="/contact">Contact</router-link></span>
          </b-col>
          <!-- <b-col>
            <div id="rightArrow" 
            class="direction-button 
            justify-content-start" 
            @click="flipPage($event)">
              <font-awesome-icon 
                icon="fa-solid fa-chevron-right"
                class="directions mr-5" 
              />
            </div>
          </b-col> -->
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
  mounted() {
    // this.currentPage = this.$router.currentRoute.path;
  },
  methods: {
    //   flipPage(event) {
    //   const clickDirection = event.target.id;
    //   const currentIndex = this.pageRoutes.findIndex((element) => {
    //     return element === this.currentPage;
    //   });

    //   let indexToNavigate;
    //   if (clickDirection === 'rightArrow') {
    //     indexToNavigate = currentIndex + 1;
    //   } else {
    //     indexToNavigate = currentIndex - 1;
    //   }

    //   if (indexToNavigate + 1 > this.pageRoutes.length) {
    //     indexToNavigate = 0;
    //   }

    //   router.push(this.pageRoutes[indexToNavigate]);
    //   this.currentPage = this.$router.currentRoute.path;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  margin: 0 auto;
  width: 75%;
}

.nav-button {
  margin: 0 1rem;
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
