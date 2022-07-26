<template>
      <div class="nav-container">
        <b-row align-h="center">
              <span class="nav-button"><router-link to="/">Home</router-link></span>
              <span class="nav-button"><router-link to="/about">About</router-link></span>
              <span class="nav-button"><router-link to="/projects">Projects</router-link></span>
              <span class="nav-button"><router-link to="/life">Life</router-link></span>
              <!-- <span class="nav-button"><router-link to="/contact">Contact</router-link></span> -->
        </b-row>
      </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  margin: 0 3rem;
}

.nav-button {
  margin: auto 1rem auto 2rem;
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
</style>
