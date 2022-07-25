<template>
    <b-container class="d-flex align-self-top hi5" fluid="lg" align-v="center">
        <div class="align-self-center contact">
            <b-row class="justify-content-left header">
                <h1 class="display-5">{{ selectQuote.text }}</h1>
            </b-row>
            <b-row>
                <span>{{ selectQuote.author }} </span><span v-if="selectQuote.source" style="font-style: italic;">, {{ selectQuote.source }}</span>
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

export default {
  name: 'Life',
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
    width: 100%;
}
.header {
    margin-bottom: 1rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
