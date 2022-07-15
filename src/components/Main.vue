<template>
    <b-container class="d-flex align-self-center hi5" fluid="lg" align-v="center">
        <div class="align-self-center">
            <b-row class="justify-content-left">
                <h1 class="display-2">Hubert Shon</h1>
            </b-row>
            <b-row class="justify-content-center">
                <h4 class="text-left">
                    I am a full stack engineer in the New York City area. Nice to meet you! 
                    <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. -->
                </h4>
            </b-row>
        </div>
    </b-container>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

h1 {
  font-family: "DM Serif Display", serif;
  letter-spacing: 0.02em;
  background: -webkit-linear-gradient(65deg, #eee 15%, #ffc14e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-family: "Raleway", sans-serif;
  font-weight: normal;
}

.hi5 {
    height: 100%;
}
</style>
