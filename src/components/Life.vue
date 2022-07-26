<template>
    <b-container class="d-flex align-self-top justify-content-center hi5" fluid="md" align-v="center">
        <div class="align-self-center justify-content-center contact">
          <b-row class="justify-content-left header">
              <h1 class="display-5">{{ selectQuote.text }}</h1>
          </b-row>
          <b-row class="mb-5">
              <span>{{ selectQuote.author }} </span><span v-if="selectQuote.source" style="font-style: italic;">, {{ selectQuote.source }}</span>
          </b-row>
          <!-- <b-row></b-row> -->
            

        <div class="align-self-center favorites">
          <h4 class="mb-2">Recent Favorites</h4>
          <b-row class="mb-5 flex-column">
              <b-col class="subheader" cols="2">Watches:</b-col>
              <b-col>Stranger Things 4</b-col>
              <b-col>Moon Knight</b-col>
              <b-col>Unforgiven</b-col>
          </b-row>
          <b-row class="mb-5 flex-column">
            <b-col class="subheader" cols="2">Reads:</b-col>
            <b-col>The Way of the Heart, Henri Nouwen</b-col>
            <b-col>Lincoln's Battle with God, Stephen Mansfield</b-col>
            <b-col>The Name of the Wind, Patrick Rothfuss</b-col>
          </b-row>
          <b-row class="mb-5 flex-column">
              <b-col class="subheader" cols="2">Games:</b-col>
              <b-col>FFVII: Remake</b-col>
              <b-col>Red Dead Redemption 2</b-col>
              <b-col>Hades</b-col>
          </b-row>
        </div>
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
// import InfoCard from './InfoCard.vue';

export default {
  name: 'Life',
  // components: { InfoCard }, 
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
    /* background-color: black; */
    height: 100%;
}

.contact {
    /* background-color: darkgray; */
    width: 75%;
}

.favorites { 
  margin-top: 5rem;
}
.header {
    margin-bottom: 1rem;
}

.subheader { 
  font-family: "DM Serif Display", serif;
  font-size: 1.25em;

}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
