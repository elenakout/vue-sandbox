<template>
  <div>
    <Carousel
      :paginationEnabled="false"
      :autoplayTimeout="3000"
      :autoplay="true"
      :per-page="3"
      :loop="true"
      :speed="1500"
      :centerMode="true"
    >
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="slider_bck">
          <img :src="slide.img" alt="img" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Carousel',
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    slides: [
      {
        id: 1,
        img: 'https://i.imgur.com/d9mLSSc.jpg',
      },
      {
        id: 2,
        img: '"https://i.imgur.com/27qKW2z.jpg',
      },
      {
        id: 3,
        img: 'https://i.imgur.com/G4Eo02o.jpg',
      },
      {
        id: 4,
        img: 'https://i.imgur.com/7KDtuAI.jpg',
      },
      {
        id: 5,
        img: 'https://i.imgur.com/PVKJdQJ.jpg',
      },
      {
        id: 6,
        img: 'https://i.imgur.com/shNS0lI.jpg',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.slider_bck {
  background-color: black;
  width: 100%;
  height: 65vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  display: flex;
  align-items: center;

  & > img {
    width: 100%;
    max-height: 65vh;

    object-fit: contain;
    vertical-align: middle;
  }
}

@media only screen and (max-width: 768px) {
  .slider__bck {
    height: 40vh;

    & > img {
      max-height: 40vh;
    }
  }
}

@media only screen and (max-width: 320px) {
  .slider__bck {
    height: 25vh;

    & > img {
      max-height: 25vh;
    }
  }
}
</style>
