<template>
    <b-container class="d-flex align-self-top hi5" fluid="md" align-v="start">
        <div class="align-self-center about">
            <b-row class="justify-content-left ml-0 mb-3">
                <h1 class="display-4">About</h1>
            </b-row>
            <b-row class="justify-content-left align-items-center">
                <b-col class="d-flex" cols="3">
                    <img src="../assets/images/hs_headshot.jpg" class="headshot" />
                </b-col>
                <b-col cols="9" class="d-flex align-content-middle">
                <p class="text-left align-self-middle summary">
                    Full-stack engineer with almost 2 years of experience at a financial tech startup. Strong proclivity towards frontend applications and user experience. Highly motivated self-learner who is resolute in seeing tasks to completion. I take delight in empowering users and collaborating with teams that enable their users to do “more”.
                </p>
                </b-col>
            </b-row>
            <div class="experience mt-1">
                <b-row class="mt-5">
                    <b-col cols="3">
                        <ul>
                            <a class="ml-2" href="/public/docs/HubertShon-Resume2022.pdf" download>
                                <font-awesome-icon class="mr-2" icon="fa-solid fa-file-download" />
                                <span>Download Resume</span>
                            </a>
                        </ul>
                        <ul>
                            <router-link class="ml-2" to="/contact">
                                <font-awesome-icon class="mr-2" icon="fa-solid fa-envelope" />
                                <span>Get In Touch</span>
                            </router-link>
                        </ul>
                    </b-col>
                    <b-col cols="3" class="d-flex align-items-bottom">
                        <h4 class="align-self-end">Skills</h4>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="3">
                    </b-col>
                    <b-col cols="9">
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
                </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        
                    </b-col>
                    <b-col>
                        
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</template>

<script>
// import Contact from './Contact.vue';
export default {
  name: 'About',
//   components: { Contact },
  props: {},
//   data: () => {
//     publicPath: process.env.BASE_URL
//   },
  methods: {
    downloadResume() {
        const url = 'public/docs/HubertShon-Resume2022.pdf';
        window.location.href = url;
    }
  }
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
    /* height: 100%; */
}

.about {
    margin-top: 5rem;
}

.headshot {
    border-radius: 5px;
    width: 85%;
    box-shadow: 0px 4px 20px -6px rgb(0, 0, 0, 0.6);
    box-shadow: 0px 28px 25px -20px rgb(0, 0, 0, 0.6);

}

.experience {
    margin-top: 1rem;
}

td {
    width: 33%;
}

.table-cell-right {
    text-align: right;
}

.summary {
    font-size: 1.25em;
}
</style>
