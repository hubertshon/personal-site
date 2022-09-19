<template>
    <b-container class="d-flex justify-content-center" fluid="md" align-v="center">
        <div class="align-self-center h-100">
          <b-row>
            <h1 class="display-4 mb-4">Projects</h1>
          </b-row>
          <b-row class="mt-5 mb-2">
            <h5>Latest</h5>
          </b-row>
          <b-row class="justify-content-center"> 
              <b-col class="d-flex justify-content-center m-3"><InfoCard 
                text="Casa Bar Menu" 
                link="https://angry-ritchie-9530d3.netlify.app/" 
                imageUrl="barmneu.png"
                description="A menu of drinks I like to serve guests at home. Vue.js"
              /></b-col>
              <b-col class="d-flex justify-content-center m-3"><InfoCard
                text="MeesterKeem Twitch"
                link="https://twitch.tv/meesterkeem"
                imageUrl="twitch.png" 
                description="Graphics and widgets for a Twitch channel."
                /></b-col>
          </b-row>
          <b-row class="mt-5 mb-2">
            <h5>Early Projects</h5>
          </b-row>
          <b-row>
              <b-col class="d-flex justify-content-center m-3"><InfoCard
                text="Regulae"
                link="https://www.youtube.com/watch?v=XUN3ksZ0bzU"
                imageUrl="regulae.png" 
                description="Habit tracker that organizes habits into larger categories. Rails, Vue.js"
                /></b-col>
              <b-col class="d-flex justify-content-center m-3"><InfoCard 
                text="Grade My Professor"
                link="https://peaceful-lowlands-22766.herokuapp.com/"
                imageUrl="professor.png" 
                description="A mock educator rating site. Node/Express.js, Vue.js"
                /></b-col>
          </b-row>
        </div>

        <!-- <div class="align-self-center contact">
            <b-row class="justify-content-left header">
                <img src="../assets/images/oryukdo.jpg">
            </b-row>
            <b-row>
                <span>{{ selectQuote.author }} </span><span v-if="selectQuote.source" style="font-style: italic;">, {{ selectQuote.source }}</span>
            </b-row>
        </div> -->

          
    </b-container>
</template>

<script>
import quotes from '../assets/quotes.js';
import InfoCard from './InfoCard.vue';

export default {
  name: 'Life',
  components: { InfoCard }, 
  data: () => ({
    quoteNumber: 0,
    selectQuote: quotes[this.quoteNumber]
  }),
  created() {
    this.quoteNumber = Math.random() * quotes.quotes.length | 0;
    this.selectQuote = quotes.quotes[this.quoteNumber];
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
  /* background: -webkit-linear-gradient(65deg, #eee 25%, #ffc14e); */
  background: -webkit-linear-gradient(65deg, #eee 25%, #FBCB71);
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

.header {
    margin-bottom: 1rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
