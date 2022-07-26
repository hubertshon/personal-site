<template>
        <div class="card-container d-flex justify-content-center" @click="goToLink">
            <div class="align-self-center"><p>{{ text }}</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    text: String,
    icon: String,
    category: String,
    link: String
  },
  data() {
    return {
      // urlLink: link
    }
  },
  methods: {
    goToLink() {
      window.open(this.link);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
    border-radius: 5px;
    border: 0.5px solid rgb(102, 102, 102); 
    background-color: #21343f;
    width: 300px;
    height: 150px;
    box-shadow: 0px 20px 30px -18px rgb(0, 0, 0, 0.5);
    cursor: pointer;
}

.card-container:hover {
  border: 0.25px solid rgb(190, 201, 129);
}
</style>
