<template>

    <!-- <b-container class="nav-container" fluid="lg" align-v="start" > -->
      <div class="nav-container">
        <b-row align-h="center">
              <span class="nav-button" variant="outline-light">About</span>
              <span class="nav-button" variant="outline-light">Projects</span>
              <span class="nav-button" variant="outline-light">Contact</span>
        </b-row>
      </div>
    <!-- </b-container> -->
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
  /* background-color: teal; */
  margin: 0 3rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
}
</style>
