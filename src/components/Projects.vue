<template>
    <b-container class="d-flex align-self-top justify-content-center hi5" fluid="md" align-v="center">
        <div>
          <b-row>
            <h1 class="display-4 mb-4">Projects</h1>
          </b-row>
          <b-row class="mt-5 mb-2">
            <h5>Latest</h5>
          </b-row>
          <b-row>
              <b-col><InfoCard text="Casa Bar Menu" link="https://angry-ritchie-9530d3.netlify.app/" /></b-col>
              <b-col></b-col>
              <b-col></b-col>
          </b-row>
          <b-row class="mt-5 mb-2">
            <h5>Early Projects</h5>
          </b-row>
          <b-row>
              <b-col><InfoCard text="Regulae" link="https://www.youtube.com/watch?v=XUN3ksZ0bzU" /></b-col>
              <b-col><InfoCard text="Grade My Professor" link="https://peaceful-lowlands-22766.herokuapp.com/" /></b-col>
              <b-col><InfoCard text="Game" /></b-col>
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
    /* background-color: black; */
    height: 100%;
}

.contact {
    /* background-color: darkgray; */
    width: 75%;
}
.header {
    margin-bottom: 1rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
