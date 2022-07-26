<template>
        <div class="card-container d-flex justify-content-center" @click="goToLink" @mouseover="hover = true" @mouseleave="hover = false">
            <p v-if="hover" class="text-description">{{ description }}</p>
            <p v-if="hover === false" class="centered">{{ text }}</p>
            <div class="align-self-center thumbnail" :class="{ hoverimg: hover }">
              <img v-if="imageUrl" :src="getImgUrl(imageUrl)" />
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
    link: String,
    imageUrl: String,
    description: String
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    goToLink() {
      window.open(this.link);
    },
    getImgUrl(url) {
      return require('../assets/images/thumbnails/' + url);
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
    overflow: hidden;

}

.card-container:hover {
  border: 0.25px solid rgb(190, 201, 129);
}

.thumbnail img {
  max-width: 150%;
  max-height: 100%;
  object-fit: contain;
  transform: translate(-15%, 14%);
  opacity: 0.55;
}

.hoverimg {
  opacity: 0.25;
}

.centered {
  position: absolute;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 1;
  z-index: 99;
}

.description {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 98;
}

.text-description {
  position: absolute;
  font-size: 0.85em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 1;
  z-index: 97;
}

</style>
