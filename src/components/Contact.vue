<template>
    <b-container class="d-flex h-100" fluid="md" align-v="center">
        <div class="align-self-center w-100">
            <b-row class="justify-content-left header ml-0">
                <h1 class="display-4">Contact</h1>
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
                    <p class="row-heading">Email</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </b-col>
                <b-col cols="8"><a href="mailto:hubert.shon@gmail.com">hubert.shon@gmail.com</a></b-col>
            </b-row>
            <b-row> 
                <b-col cols="3">
                    <p class="row-heading">Github</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-brands fa-github-square" />
                </b-col>
                <b-col cols="8"><a href="http://github.com/hubertshon">github.com/hubertshon</a></b-col>
            </b-row>
            <b-row>
                <b-col cols="3">
                    <p class="row-heading">LinkedIn</p></b-col>
                <b-col cols="0.5">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </b-col>
                <b-col cols="8"><a href="http://linkedin.com/in/hubert-shon">linkedin.com/in/hubert-shon</a></b-col>
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
  /* color: #42b983; */
  /* color: #70AE6E; */
  color: #12EAEA;
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

.contact {
    width: 65%;
    height: 100%;
}
.header {
    margin-bottom: 3rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
