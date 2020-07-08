<template>
  <div class="agileCarousel">
    <agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade autoplay centerMode>
      <img v-for="item in slides" :key="item.id" class="slide" :src="item.img" alt />

      <!-- <img
        class="slide"
        src="https://q-cf.bstatic.com/images/hotel/max1280x900/199/199719932.jpg"
        alt
      />

      <img
        src="https://r-cf.bstatic.com/images/hotel/max1280x900/199/199688544.jpg"
        alt="img"
        class="slide"
      />

      <img
        src="https://q-cf.bstatic.com/images/hotel/max1280x900/199/199689840.jpg"
        alt="img"
        class="slide"
      />-->
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  components: {
    agile: VueAgile,
  },
  data: () => ({
    slides: [
      {
        id: 1,
        img:
          'https://q-cf.bstatic.com/images/hotel/max1280x900/199/199700894.jpg',
      },
      {
        id: 4,
        img:
          'https://q-cf.bstatic.com/images/hotel/max1280x900/199/199719932.jpg',
      },
      {
        id: 2,
        img:
          'https://r-cf.bstatic.com/images/hotel/max1280x900/199/199688544.jpg',
      },
      {
        id: 3,
        img:
          'https://q-cf.bstatic.com/images/hotel/max1280x900/199/199689840.jpg',
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.slide {
  display: block;
  height: 85vh;
  object-fit: cover;
  width: 100%;
}
</style>
