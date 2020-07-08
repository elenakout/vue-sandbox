<template>
  <div class="carousel">
    <v-carousel cycle="true" hide-delimiter-background="true" height="85vh">
      <v-carousel-item
        v-for="item in slides"
        :key="item.id"
        :src="item.img"
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="carItem"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
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
.carItem {
  img {
    object-fit: contain;
  }
}
</style>
