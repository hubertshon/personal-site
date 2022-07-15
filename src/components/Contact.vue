<template>
    <b-container class="d-flex align-self-top hi5" fluid="lg" align-v="center">
        <div class="align-self-center contact">
            <b-row class="justify-content-left header">
                <h1 class="display-4">Contact</h1>
            </b-row>
            <b-row>
                <b-col cols="3">
                    <p class="row-heading">Email</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </b-col>
                <b-col cols="8">hubert.shon@gmail.com</b-col>
            </b-row>
            <b-row>
                <b-col class="ml-0" cols="3">
                    <p class="row-heading">Location</p></b-col>
                     <b-col cols="0.5">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                </b-col>
                <b-col cols="8">New York City Area</b-col>
            </b-row>
            <b-row> 
                <b-col cols="3">
                    <p class="row-heading">Github</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-brands fa-github-square" />
                </b-col>
                <b-col cols="8">github.com/hubertshon</b-col>
            </b-row>
            <b-row>
                <b-col cols="3">
                    <p class="row-heading">LinkedIn</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </b-col>
                <b-col cols="8">linkedin.com/in/hubert-shon</b-col>
            </b-row>

        </div>
    </b-container>
</template>

<script>
export default {
  name: 'Contact',
  props: {}
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
  background: -webkit-linear-gradient(65deg, #eee 25%, #ffc14e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-family: "Raleway", sans-serif;
  font-weight: normal;
}

.hi5 {
    /* background-color: black; */
    height: 100%;
}

.contact {
    /* background-color: darkgray; */
    width: 100%;
}
.header {
    margin-bottom: 3rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
