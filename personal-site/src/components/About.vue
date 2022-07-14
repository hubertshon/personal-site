<template>
    <b-container class="d-flex align-self-top hi5" fluid="lg" align-v="start">
        <div class="align-self-center about">
            <b-row class="justify-content-left">
                <h1 class="display-4">About</h1>
            </b-row>
            <b-row class="justify-content-center">
                <p class="text-left">
                    Full-stack engineer with almost 2 years of experience at a financial tech startup. Strong proclivity towards frontend applications and user experience. Highly motivated self-learner who is resolute in seeing tasks to completion. I take delight in empowering users and collaborating with teams that enable their users to do “more”.
                </p>
            </b-row>
            <div class="experience">
                <b-row class="mb-2">
                    <b-col cols="3">
                        <h4>Skills</h4>
                    </b-col>
                </b-row>

                <table class="table-responsive" style="width: 100%;">
                    <tbody>
                        <tr>
                            <td>Angular</td>
                            <td>Node.js</td>
                            <td>Stencil.js</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Typescript</td>
                            <td>Git/Github</td>
                        </tr>
                        <tr>
                            <td>Django</td>
                            <td>Javascript</td>
                            <td>Sentry</td>
                        </tr>
                        <tr>
                            <td>MongoDB</td>
                            <td>HTML/CSS</td>
                            <td>Adobe Suite</td>
                        </tr>
                        <tr>
                            <td>PostgreSQL</td>
                            <td>Ruby</td>
                        </tr>
                        <tr>
                            <td>Vue.js</td>
                            <td>Rails</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <b-row class="mt-5">
                <b-col>
                    <font-awesome-icon class="mr-2" icon="fa-solid fa-file-download" />
                    <span>PDF Resume</span>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
export default {
  name: 'About',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    height: 100%;
}

.about {
    margin-top: 5rem;
}

.experience {
    margin-top: 3rem;
}
</style>
